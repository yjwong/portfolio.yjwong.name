# Background

The ETC Festival is an event hosted at Carnegie Mellon University's
Entertainment Technology Center (ETC) where the games and interactive experiences,
created by the student teams throughout the ETC, are showcased in a carnival-like
atmosphere.

I was put in charge of a special segment of the festival called "Forbidden Forest".
The objective of this segment is to showcase games and interactive experiences that
did not make it into the festival proper, but are still worth showing off. Based
on past years' experience, it is anticipated that the room hosting *Forbidden Forest*
would be one of the most crowded, leading me to think of a solution that would
reduce waiting times for guests.

# Challenges Faced

Many designs were considered. Traditional queuing systems use numbers. However, this
adds considerable complexity to the implementation as well as execution. The situation
inside the room was expected to be chaotic. There are also many guests who would
not play but instead prefer to spectate. It's not reasonable to expect everyone
who would like to play to take a number in such a informal environment.

There was also very limited time to implement this - only 3 days. This was concurrent
with the theming of the room which took considerable effort and time.

# Solution

After discussions with seniors, I settled on a simple solution:

1. If the room is crowded, and if there's a long queue, station managers would
   ask guests if they want to be notified via Short Messaging Service (SMS) when
   the room becomes less crowded. If the guest agrees, station managers would ask
   the guest to input their phone
   number on an interface.
3. Now the guest is free to leave to experience other stations.
4. When the station becomes empty, station managers can choose to notify waiting
   guests via SMS.

SMS was chosen because most guests do not have access to the CMU WiFi network.

# Technology

Node.js, Twilio API, SMS
