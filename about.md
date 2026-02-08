---
layout: layout.liquid
title: About
---

<!-- I also used AI for the styling of this page, specifically for the code embedding, as I could not find a good way to do that. -->

# About the Javascript **Fetch** Exercise

<div>
    <p>
    
        I used Github Copilot with the models GPT-4.1 and Claude Haiku 4.5. These models were highly effective at completing the functionality of the assignment and even included features that I did not ask for like a loading display. One point of struggle that I noticed was that it did not style its output in a desireable way so I had to go refactor the css to make it look how I wanted. I found both models to be pretty equal in terms of their output. I was able to supply a link to the endpoint that I wanted to use, and the model was able to generate code that used the endpoint perfectly the first try. I was happily surprised when I didn't even need to supply the JSON format of a response, it found that on the documentation automatically. One prompt I used was: "I want to refactor this project to instead use the dog api https://dog.ceo/dog-api/ to display a random dog image" GPT-4.1 output the following code:

<div class="code-card">
<pre><code>&lt;div x-data="&#123; dogImg: '', loading: false &#125;"&gt;
    &lt;h1&gt;Your random dog image:&lt;/h1&gt;
    &lt;template x-if="dogImg"&gt;
        &lt;img :src="dogImg" alt="Random Dog" style="max-width: 300px; max-height: 300px;" /&gt;
    &lt;/template&gt;
    &lt;button @click="loading = true; getRandomDogImage().then(url =&gt; &#123; dogImg = url; loading = false; &#125;)"&gt;Get Dog Image&lt;/button&gt;
    &lt;span x-show="loading"&gt;Loading...&lt;/span&gt;
&lt;/div&gt;
</code></pre>
<pre><code>async function getRandomDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message; // URL of the dog image
}
</code></pre>
</div>

        As you can see, the AI output functional code using alpine, javascript, and html to achieve the desired response. It even included a loading display. I found AI to be highly effective for this usecase although it may need to be prompted more strictly regarding styling and formatting, especially if one wanted to utilize alpine.js's integrated fetching like displayed in this week's video lecture.
    </p>
</div>
