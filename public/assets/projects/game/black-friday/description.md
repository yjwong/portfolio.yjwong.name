# Background

This game was made as part of a Carnegie Mellon University (CMU) Entertainment
Technology Center (ETC)'s course called [Building Virtual Worlds](https://www.etc.cmu.edu/learn/curriculum/building-virtual-worlds/)
(BVW). In BVW, multidisciplinary teams of 4 or 5 people work for two weeks on a
game or interactive experience. For this round, the goal was to have a world that
is suitable for a festival.

**The Team:** Christopher Andy Weidya, Kyungkuk Kim, Sukyoung Lee Erika, Yiwen Zhang, Yong Jie Wong

# About The Game

This game is set in a supermarket invaded by zombies. The goal of the players is
to quickly grab required items from shelves and exiting the supermarket. The 
secondary objective of the game is to avoid getting hit by zombies.

# Thought Process

One of the factors for inclusion into the festival was the number of guests that
the world can accommodate as well as logistical requirements. Therefore, we wanted
to create a unique multiplayer experience with the HTC Vive.

One player would be seated in the trolley. This player is responsible for picking
up items from shelves. He/she is also able to kill zombies by tossing items at 
them. The other player would be pushing the trolley. This player is responsible 
for navigating, avoiding zombies and crashing into zombies to kill them. The 
division of responsibilities is meant to encourage players to communicate with
each other.

The player seated in the trolley would have the HTC Vive on, and the driver
would just have a PS/Xbox controller.

# Challenges

There were many challenges that we encountered while building the game.

## Countering Motion Sickness

During playtesting, it was reflected that having the player in the 'trolley' seated
in a static chair caused motion sickness. To fix this, we retrofitted a swivelling
office chair so that the rotational motion of the player corresponds to the actual
movement in game. The rotational position of the chair was performed by attaching
a single HTC Vive controller to the side of the chair. The Vive controller communicated
the world-space rotation of the chair to the game. This reduced the level of motion
sickness significantly.

We then made additional enhancements to the swivelling chair: we replaced the
controller used by the driver with a trolley handle made of PVC pipe and wood.
In order to determine if the handle was pushed, we used [Makey-Makey](http://makeymakey.com).
The handle was attached to the "trolley" - when the driver pushes the handle, the
player seated on the "trolley" would feel like he/she was being pushed, hence
further reducing the amount of motion sickness experienced.

## Display Replication

One issue that the driver had was not being able to see the screen when the "trolley"
was rotated backwards. To solve this, we streamed a driver-specific view to a
Microsoft Surface via Steam In-Home Streaming (IHS). Due to the way the CMU network
was configured, this required us to write a UDP forwarder to forward packets used
by Steam for IHS (for more details, click [here](projects/code/steam-udp-forwarder)).

The driver also gets a small picture-in-picture preview of what the person in
the trolley is looking at. This was done by rendering the VR camera to a `RenderTexture`
and compositing that texture onto the `RenderTexture` of the driver view.

## Countering Lag

The use of VR, the driver view and the picture-and-picture implementation meant
that we were rendering the scene 4 times. Additionally, this was in a shopping
environment where there are many instances (~thousands) of groceries. Our initial
attempt ran at a frame rate of 30-40 fps on a machine equipped with a NVIDIA
GeForce GTX 1080 and Intel Xeon E5-1620v3.

By using baked lighting, geometry instancing, LOD, distance-based and occlusion
culling, we were able to achieve framerates of 70-80 fps. By using camera layers,
dynamically turning on/off shadows, we were finally able to achieve VR-ready
framerates above 90 fps.

# Awards

This game won the [First Penguin Award](http://www.cmu.edu/randyslecture/honor/)
for taking on the biggest risk and nearly succeeding.

# Technology

Unity3D, Node.js, HTC Vive, Makey-Makey
