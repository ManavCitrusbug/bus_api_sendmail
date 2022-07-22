
from django.contrib import admin
from .models import *

@admin.register(Transport)
class Transports(admin.ModelAdmin):
        list_display=['transport_name','number_plate','seats_available','price_per_person','bus_category','available','date_time_dpt']

@admin.register(Category)
class categorys(admin.ModelAdmin):
        list_display=['category']

@admin.register(Booked_bus)
class Busbooking(admin.ModelAdmin):
        list_display=['busname','name','address','phone','age','book_date_time','paid','user']

@admin.register(Journey)
class Journey(admin.ModelAdmin):
         list_display=['start_point','end_point','Buses']

        