# Generated by Django 3.2.5 on 2021-08-02 03:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('caja', '0003_auto_20210801_1337'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sandwich',
            name='factura',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='caja.factura'),
        ),
    ]
