# The TCP/IP Model

The TCP/IP Model has four layers

## Application

This is the top layer and this contains specific function of the software. This 
is the layer that users directly interact with, through a web browser or app.
This layer is used for presenting data to the user.

Include protocols:

- SSH
- WWW
- Email
- SMS
- VOIP

## Transport

This is the third layer and it's used to provide logical communication between
application processes running on different hosts. It manages the flow of data 
from on application to another making sure the data arrives accurately, in
order, and doesn't lose anything.

Include protocols:

- Packets
- TCP
- UDP

## Internet

This is the second layer and it routes data packets using IP addresses, to
deliver them across the entire internet. It has to route datagrams to their
final destination.

Include protocol:

-IP

## Link

This is the first layer and is used for transmitting data over the physical 
networkn and handling details of how the data is transmittted. It converts data
packets into frames and sends them as bits.

Include protocols:
