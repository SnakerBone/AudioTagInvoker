var audioTags = document.getElementsByTagName('audio');

for (var i = 0; i < audioTags.length; i++) 
{
    var audioTag = audioTags[i];

    if (audioTag.hasAttribute('controlslist')) 
    {
        audioTag.removeAttribute('controlslist');
        console.log("[Audio Tag Invoker]: Invoked audio tag attribute at index " + i);

        if(i == audioTags.length - 1) 
        {
            var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart; 
            console.log("[Audio Tag Invoker]: Successfully invoked " + audioTags.length + " audio tag attributes from this web page. Took " + loadTime + " ms");
        }
    }
}