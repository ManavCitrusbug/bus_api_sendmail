# from xmlrpc.client import Transport
from unicodedata import category
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from bus.models import Category, Transport
from django.contrib.auth import get_user_model


class CategoryCreationForm(forms.ModelForm):
    """
    A form for creating new users. Includes all the required
    fields, plus a repeated password.
    """




    class Meta:
        model = Category
        fields = ["category"]
        labels={'category':'Enter the Bus category'}


    def clean(self) :
        cleaned_data = super(CategoryCreationForm, self).clean()
        # Check that the two password entries match
        category = cleaned_data.get("category")
       
       
        if category =='':
            raise forms.ValidationError("Enter The category")
        return cleaned_data

    def save(self, commit=True):
        # Save the provided password in hashed format+
        cleaned_data = super(CategoryCreationForm, self).clean()
        category= super(CategoryCreationForm, self).save(commit=False)
        category.category = cleaned_data["category"]
      
        if commit:
            category.save()
        return category

