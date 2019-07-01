#!/bin/sh

#build index.html
cat header.html navigation.html index-top.html index.htm footer.html > ../output/index.html

#build about.html
cat header.html navigation.html about.htm footer-baidu.html > ../output/about.html


#build training-kernel-driver.html
cat header.html navigation.html training-kernel-driver.htm bottom.htm footer.html > ../output/training-kernel-driver.html

#build training-app.html
cat header.html navigation.html training-app.htm bottom.htm footer.html > ../output/training-app.html

#build training-android.html
cat header.html navigation.html training-android.htm bottom.htm footer.html > ../output/training-android.html

#build apps.html
cat header.html navigation.html apps-android-ios.htm bottom.htm footer.html > ../output/apps-android-ios.html

#build apps-wifi-led.html
cat header.html navigation.html apps-wifi-led.htm bottom.htm footer.html > ../output/apps-wifi-led.html

#build apps-bluetooth.html
cat header.html navigation.html apps-bluetooth.htm bottom.htm footer.html > ../output/apps-bluetooth.html

#build apps-smart-homehtml
cat header.html navigation.html apps-smart-home.htm bottom.htm footer.html > ../output/apps-smart-home.html

#build apps-qt.html
cat header.html navigation.html apps-qt.htm bottom.htm footer.html > ../output/apps-qt.html


#build apps-driver.html
cat header.html navigation.html apps-driver.htm bottom.htm footer.html > ../output/apps-driver.html

#build services.html
cat header.html navigation.html services.htm bottom.htm footer.html > ../output/services.html

#build squash.html
cat header.html navigation.html squash-club.htm bottom.htm footer.html > ../output/squash-club.html

#build squash-video.html
cat header.html navigation.html squash-video.htm bottom.htm footer.html > ../output/squash-video.html

#build event.html
cat header.html navigation.html event.htm bottom.htm footer.html > ../output/event.html

#build services.html
cat header.html navigation.html services.htm bottom.htm footer.html > ../output/services.html

#build resources.html
cat header.html navigation.html resources.htm bottom.htm footer.html > ../output/resources.html

#build whole-process.html
cat header.html navigation.html whole-process.htm bottom.htm footer.html > ../output/whole-process.html


