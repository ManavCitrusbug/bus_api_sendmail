from dataclasses import field, fields
from pyexpat import model
from tracemalloc import start
from xmlrpc.client import Transport
from requests import request
from rest_framework import serializers


from unicodedata import category
from django.db import models
from django.contrib.auth.models import User
from django.forms import CharField
from datetime import datetime, time

from bus.models import *



class Loginserializer(serializers.ModelSerializer):
   class Meta:
      model = User
      fields = ['username', 'password']

   def validate(self, data):
      username = data.get('username')
      password = data.get('password')
      if username == '':
            raise serializers.ValidationError('Enter the Username')
      if password == '':
            raise serializers.ValidationError('Enter the password')
      return data


class Registerserializer(serializers.ModelSerializer):
   class Meta:
       model = User
    #    fields='__all__'
       fields = ['id', 'username', 'first_name',
           'last_name', 'email', 'password']

   def validate(self, data):
      username = data.get('username')
      first_name = data.get('first_name')
      last_name = data.get('last_name')
      email = data.get('email')
      password = data.get('password')
      if username == '':
          raise serializers.ValidationError('Enter the Username')
      if first_name == '':
         raise serializers.ValidationError('Enter the firstname')
      if last_name == '':
         raise serializers.ValidationError('Enter the last name')
      if email == '':
         raise serializers.ValidationError('Enter the email')
      if password == '':
         raise serializers.ValidationError('Enter the password')
      return data


class Categoryserializer(serializers.ModelSerializer):
   class Meta:
       model = Category
       fields = ['id', 'category']

   def validate(self, data):
      category = data.get('category')

      if category == '':
          raise serializers.ValidationError('Enter the category')

      return data
class Transportfilterserializer(serializers.ModelSerializer):
   class Meta:
       model = Transport
       fields = [ 'transport_name']

class Journeyserializer(serializers.ModelSerializer):
   transport=Transportfilterserializer(many=True,read_only=True)
   class Meta:
       model = Journey
       fields = [ 'start_point', 'end_point', 'transport']

   def validate(self, data):
      start_point = data.get('start_point')
      end_point = data.get('end_point')
      transport = data.get('transport')
      if start_point == '':
          raise serializers.ValidationError('Enter the start_point')
      if end_point == '':
         raise serializers.ValidationError('Enter the end_point')
      if transport == '':
         raise serializers.ValidationError('Enter the transport')
      return data


class Journeyfilterserializer(serializers.ModelSerializer):

   class Meta:
       model = Journey
       fields = [ 'start_point', 'end_point']
   def validate(self, data):
      start_point=data.get('start_point')
      end_point=data.get('end_point')

      if start_point == '':
          raise serializers.ValidationError('Enter the start_point')
      if end_point == '':
         raise serializers.ValidationError('Enter the end_point')
   
      return data

class Transportserializer(serializers.ModelSerializer):

   journey=Journeyfilterserializer(many=True,read_only=True)
   bus_category=serializers.StringRelatedField(read_only=True)
   class Meta:
       model=Transport
       fields=['id','transport_name','number_plate','seats_available','price_per_person','bus_category','available','date_time_dpt','journey']
   def validate(self, data):
      transport_name=data.get('transport_name')
      number_plate=data.get('number_plate')
      seats_available=data.get('seats_available')
      price_per_person=data.get('price_per_person')
      bus_category=data.get('bus_category')
      available=data.get('available')
      date_time_dpt=data.get('date_time_dpt')
      if transport_name == '':
          raise serializers.ValidationError('Enter the busname')
      if number_plate == '':
         raise serializers.ValidationError('Enter the busname')
      if seats_available == '':
         raise serializers.ValidationError('Enter the seats') 
      if price_per_person == '':
         raise serializers.ValidationError('Enter the price') 
      if bus_category == '':
         raise serializers.ValidationError('Enter the category')
      if available == '':
         raise serializers.ValidationError('Enter the availble')
      if date_time_dpt == '':
         raise serializers.ValidationError('Enter the date')
      return data
class Bookedbusserializer(serializers.ModelSerializer):
   class Meta:
       model=Booked_bus
       fields=['id','busname','name','address','phone','age','book_date_time','paid','user']
   def validate(self, data):
      busname=data.get('busname')
      name=data.get('name')
      address=data.get('address')
      phone=data.get('phone')
      age=data.get('age')
      book_date_time=data.get('book_date_time')
      paid=data.get('paid')
      user=data.get('user')
      if busname == '':
          raise serializers.ValidationError('Enter the busname')
      if name == '':
         raise serializers.ValidationError('Enter the passengername')
      if address == '':
         raise serializers.ValidationError('Enter the address') 
      if phone == '':
         raise serializers.ValidationError('Enter the phone') 
      if age == '':
         raise serializers.ValidationError('Enter the age')
      if book_date_time == '':
         raise serializers.ValidationError('Enter the bookeddate')
      if paid == '':
         raise serializers.ValidationError('Enter the paid')
      if user == '':
         raise serializers.ValidationError('Enter the user')
      return data

class JourneyDeatailserializer(serializers.ModelSerializer):
   transport=Transportserializer(many=True)
   class Meta:
       model = Journey
       fields = [ 'start_point', 'end_point','transport']


class CustomJourneySerializer(serializers.Serializer):
   journey=Journeyserializer(many=True)
   date=serializers.SerializerMethodField()
   class Meta:
      fields=['date','journey']
   def get_date(self,instance):
     
      return instance.get("date")
class JourneyAddbusserializer(serializers.ModelSerializer):

   class Meta:
       model = Journey
       fields = [ 'start_point', 'end_point']

class Addbusbyrootserialiazer(serializers.ModelSerializer):
   journey=JourneyAddbusserializer(many=True)
   class Meta:
      model=Transport
      fields=['journey','transport_name','number_plate','seats_available','price_per_person','bus_category','available','date_time_dpt']
   
   def create(self, validated_data):
      journey_data = validated_data.pop('journey')
      list=[]

      for key,value in journey_data[0].items():
         list.append(value)
      journey = Journey.objects.create(start_point=list[0],end_point=list[1])
      transport = Transport.objects.create(**validated_data)
      journey.transport.add(transport)
      return transport