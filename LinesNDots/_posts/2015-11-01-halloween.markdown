---
layout: post
title:  "Central Park"
date:   2015-11-01 21:25:34
categories: photo
---
Central Park. It is an oasis of green in the urban jungle. The fall colors set it on fire. The peace and quiet is spiritual. Biking there one feels close to nature. <br><br>
![Central Park]({{ site.baseurl }}/assets/IMG_4343.jpg){:height="400px" width="700px"}
<br>

{% highlight python %}
import time
import subprocess
i = 0
while i < 2:
    try:
        time.sleep(5)
        print('Retry #' + i)
        subprocess.Popen('ls.')
        i = 3
    except Exception, e:
        raise ('Failure')
        i += 1
{% endhighlight %}
