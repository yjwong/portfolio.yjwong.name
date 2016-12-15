# Background

There is an increasing amount of web development projects that use Node.js. Some
clients have requested to have projects demonstrated on their machines without
deploying to any server. However, Node.js requires installation on Windows,
and the installation process requires Administrator privileges. To solve this
problem, I created a set of scripts that provide access to the Node.js runtime
without needing installation.

# Challenges

To have something readily available to run on Windows (without installation of
other software), either a batch file or a native executable can be used. These
methods allow users to have a Node.js environment ready by just double clicking.

However, batch files are relatively limited in functionality. One of the key
requirements is the ability to download the Node.js binaries via HTTP, but
batch files don't provide that functionality. Additionally, there is also the
requirement to unpack the archive from the server. Native executables are harder
to maintain, and some clients might be wary of running unknown executables.

# Solution

Fortunately, Windows 7 and later includes PowerShell which has much more
functionality. Using `Start-BitsTransfer`, the binary archive can be downloaded.
PowerShell's integration with .NET means that I can use .NET assemblies for 
functionality not natively available in PowerShell. To unpack the archive,
the `System.IO.Compression.FileSystem` interface was used.
