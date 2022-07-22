from __future__ import absolute_import, unicode_literals

import os

from celery import Celery
from django.core.mail import send_mail,BadHeaderError
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Email, Mail, Personalization
from bus_online_booking.settings import SENDGRID_API_KEY
from bus_online_booking.settings import TEMPLATE_KEY
from bus_online_booking.settings import SENDGRID_FROM_MAIL,SENDGRID_TO_MAIL
from python_http_client import exceptions

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bus_online_booking.settings')

app = Celery('celery_app')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
app.config_from_object('django.conf:settings')

# Load task modules from all registered Django app configs.
app.autodiscover_tasks()


@app.task
def send_email(username,email,bus_name,pessengername,address,phone,date1,age,busnumber,journeydate1):
    sendmail=email
    dynamic_data_for_template = {"user":f'{username}','bus':f'{bus_name}','pessengername':f'{pessengername}','address':f'{address}','phone':f'{phone}','date':f'{date1}','age':f'{age}','busnumber':f'{busnumber}','journeydate':f'{journeydate1}'}
    message = Mail(from_email=SENDGRID_FROM_MAIL,
    to_emails=sendmail)
    message.dynamic_template_data=dynamic_data_for_template
    message.template_id=TEMPLATE_KEY
    sg = SendGridAPIClient(SENDGRID_API_KEY)
    sg.send(message)