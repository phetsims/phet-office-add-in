# Developing Add-Ins for Office Mix

## Testing Changes Locally in PowerPoint:
1. Open PowerPoint, and open File > Options
1. Navigate to Trust Center > Trust Center Settings > Trusted Add-in Catalogs
1. In Catalog Url, type in the directory for the manifest file in Network Share format.
    - Example: `\\computer-name\c$\Users\user-name\Desktop`
1. Click Add catalog and add a checkbox for "Show in Menu"
1. Click OK and restart Powerpoint.
1. Open a new presentation, or the presentation you want to test.
1. Click Insert > Store, and select the new "SHARED FOLDER" entry.
1. If there is a manifest file in the directory you added to Trust Center Settings, you should have an option to open the add-in

## Testing Changes in a Browser:
1. Commit the changes to the github repo
1. Pull the changes to phet-server: /data/share/phet/phet-office-mix
1. Copy the changes to the document root: /data/web/static/phetsims/office-mix
1. Click this link to interact with the changes in a test environment: https://labsjs.blob.core.windows.net/sdk/LabsJS-1.0.4/labshost.html?lab=https://phet.colorado.edu/office-mix/store.html?PostMessageLabHost
- Pro Tip: Powerpoint uses IE11 to display the add-in, so if you are seeing errors in PowerPoint but not in Chrome, try viewing this link in IE11 to troubleshoot

## To upload the changes to the Office Store:
- Review the process here: https://msdn.microsoft.com/library/ff075782-1303-4517-91cc-b3d730e9b9ae(Office.15).aspx
- This process must only be followed when changes are needed to the manifest file.  
- To make changes to the plug-in, just update the files hosted at https://phet.colorado.edu/office-mix
