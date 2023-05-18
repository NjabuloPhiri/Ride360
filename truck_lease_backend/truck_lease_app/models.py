from django.db import models

# Add custom fields for local and remote DBs

class Local(models.Model):
    _DATABASE = 'default'
    # Create model structures here to test functionality

    name = models.CharField(max_length=50)
    data = models.JSONField()

class Remote(models.Model):
    _DATABASE = 'remote'
    # Create model structures here

    name = models.CharField(max_length=30)
    data = models.JSONField()

l = Local.objects.create(name='Earth', data={'color': 'blue', 'distance': 'near'})
l.save()
r = Remote.objects.create(name='Mars', data={'color': 'red', 'distance': 'very far'})
r.save()
