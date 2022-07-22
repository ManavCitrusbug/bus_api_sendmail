# from xmlrpc.client import Transport
from asyncio import transports
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from bus.models import Journey, Transport
from django.contrib.auth import get_user_model


class JourneyCreationForm(forms.ModelForm):
    """
    A form for creating new users. Includes all the required
    fields, plus a repeated password.
    """




    class Meta:
        model = Journey
        fields = ["start_point",
            "end_point",
            "transport"
            ]
        labels={'start_point':'Enter the Start Point','end_point':'Enter the End Point','transport':'Enter the Buses'}
 
    def clean(self) :
        cleaned_data = super(JourneyCreationForm, self).clean()
        # Check that the two password entries match
        start = cleaned_data.get("start_point")
        end = cleaned_data.get("end_point")
        transport = cleaned_data.get("transport")
        print(transport,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        if start =='':
            raise forms.ValidationError("Enter The start")
            

        elif end =='':
            raise forms.ValidationError("Enter The End")
            
        elif transport == '' :
            raise forms.ValidationError("Enter The Transport")
       
        return cleaned_data

    def save(self, commit=True):
        # Save the provided password in hashed format+
        cleaned_data = super(JourneyCreationForm, self).clean()
        journey = super(JourneyCreationForm, self).save(commit=False)
        journey.start_point =  cleaned_data["start_point"]
        journey.end_point = cleaned_data["end_point"]  
         
        if commit:
            journey.save()
        for transport in cleaned_data["transport"] :

            journey.transport.add(transport)
            journey.save()
        return journey


class JourneyUpdateForm(forms.ModelForm):
    class Meta():
        model = Journey

        fields = [
          "start_point",
            "end_point",
            "transport" ]

    def clean(self):
        # print(type(self.instance))
        cleaned_data = super(JourneyUpdateForm, self).clean()
        start = cleaned_data.get("start_point")
        end = cleaned_data.get("end_point")
        transport = cleaned_data.get("transport")
        
        if start =='':
            raise forms.ValidationError("Enter The Start Point")
      

        elif end =='':
            raise forms.ValidationError("Enter The End Point")
            
        elif transport == '' :
            raise forms.ValidationError("Enter The Transport")
        return cleaned_data
        

    def save(self, commit=True):
        instance = super().save(commit=False)

        if commit:
            
        
            instance.save()
       

        return instance