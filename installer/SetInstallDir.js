Session.Property("INSTALLDIR") = (new ActiveXObject("Scripting.FileSystemObject")).GetParentFolderName(Session.Property("SERVICE_INSTALLED").replace(/"/g, ""));