# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import json
from rest_framework import status
from rest_framework.test import APISimpleTestCase, APIClient, APIRequestFactory, RequestsClient
from .models import Todo
from django.test import TestCase, Client
from .serializers import TodoSerializer




