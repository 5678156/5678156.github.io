# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 9
My Partner's Key: 3

Our initial shared key: 12

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you
 did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| VSZZC           | Hello           | 12  |
| QR QXF JAN HXD  | Hi how are you  | 17  |
| AIIX NBUHEM     | Good thanks     | 6   |    
| CZF             | Bye             | 25  |



## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By
 the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity
 for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in 
`rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But
 we know that the real message is in binary.

Select the first six characters from this message and copy them here:

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information
 below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Davi]
    Destination: [Naoke]  
    Sequence: 1/3
    Data: [01010110] [01010011]
    =========
    Packet 2:

    Source: [Davi]
    Destination: [Naioke]
    Sequence: 2/3 
    Data: [01011010] [01011010]
    =========
    Packet 3:

    Source: [Davi]
    Destination: [Naioke]
    Sequence: 3/3
    Data: [01001011] []
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What
 purpose did each serve in this simulation? Symmetric encryption uses a shared
 key to encrypt and decrypt, and this was used to send the actual message.
 Asymmetric encryption was used to safely exchange the key with a public key to
 encrypt and a private key to decrypt. 
- Why is it important that this protocol uses a new key for each message? This
 is important to change a key because if you ever get hacked they will only be
 able  to read that one message and not the rest. They will not be able to
 decode past or future massages, and this overall increases security.
- Why is it important that you never share your secret key? They can decrypt
 all your messages if they get this, and they will be able to hack you.
- In the transport layer, do these messages use TCP or UDP? Why? These messages
 use TCP because the packets need to be delivered in order, and none of them
 can be lost. Encryption relies on this to happen.
- Now that you've created packets in the transport layer, give a short
 explanation of what happens to these packets in the internet layer and in the
 link layer. In the internet layer the IP protocol addresses and routes the
 packets from the source to the destination. The link layer transmits
 the packets through protocols such as Ethernet and Wi-Fi.
- This protocol successfully encrypts the **content** of the message. Even
 though and adversary in the middle can't read the content of the message, what
 other information can they still see? They can see who they are messaging to,
 where it came from, and sometimes when the message was sent which is because
 of the header.






