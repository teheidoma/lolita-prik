for gif in *.gif; do
 ffmpeg -i $gif -vframes 1 -f image2 ${gif%%.gif}_static.jpg
done