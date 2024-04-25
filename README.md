# nginx
Custom Nginx Docker for http3 support.

This image isn't really meant to be used in a general sense as I didn't set it up with broad/generic use cases in mind. This doesn't mean you can't use it, just that you should keep it in mind.

### Mounts
This image has mounts at `/config`, `/ssl`, and `/log`. 

Place site configs at `/config/sites`. Currently, files like `nginx.conf` are only copied if they don't exist. That means that existing instances of this image will not automatically take advantage of any config changes made during updates.