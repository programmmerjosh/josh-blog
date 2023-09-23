<script setup>
  import BlogItem from "../BlogItem.vue";
  import AttachmentOne from "./AttachmentOne.vue";
  import AttachmentTwo from "./AttachmentTwo.vue";
  import AttachmentThree from "./AttachmentThree.vue";
  import AttachmentFour from "./AttachmentFour.vue";
  import AttachmentFive from "./AttachmentFive.vue";
  import AttachmentSix from "./AttachmentSix.vue";
  import AttachmentSeven from "./AttachmentSeven.vue";
</script>

<template>
  <!-- BLOG POST ITEM 1 -->
  <BlogItem
    title="DO NOT FEAR"
    dateAdded="25 March 2021"
    dateUpdated="10 January 2022"
  >
    <template v-slot:base>
      <h4>Introduction/Overview:</h4>
      <p id="section-description">
        I'd like to share some very powerful and revealing resources I've
        accumulated on health and the effects of thought (and emotion) on the
        body. Each of the sources here, you'll probably find to be
        unpopular/undiscovered in mainstream media today. Our politicians and
        news journalists all around the world have been consistently warning us
        that we are in danger and are under threat by a deadly virus called
        Covid-19. We've been told to be afraid, forced to isolate (stay home),
        distance ourselves from our friends and family members. In some parts of
        the world (Australia, Canada), internment camps have even been built as
        a potential “measure of containment.” A hug or even a handshake from
        someone outside of your "bubble" has (or at least for a lengthy period
        of time, had) been considered no longer safe.
      </p>
      <p>
        In many parts of the world, a face mask (or face covering of any sort)
        was and still is, in some parts, considered mandatory when inside any
        store or place of business. Just the fact that ANY face-covering will
        suffice, proves that there was little to zero scrutiny of any scientific
        data on mask protection against respiratory viruses. Would you find any
        sane virologist using a bandana for protection when dealing with any
        kind of virus? I don’t think so. Studies have in fact shown that a
        surgical mask (the thing most people use to comply with the rules) will
        prohibit particles as small as 0.3 microns & larger; and respiratory
        viral particles (like the flu and Covid-19) are around 0.1 micros in
        size. So don’t even waste your time (or your fresh air) wearing one. See
        this
        <a target="_blank" href="https://youtu.be/0tmalcJ6WRA"
          >link to a presentation of these studies</a
        >. But, “mask your faces” they say. “You’ll protect everyone around you,
        just in case you have it”. This implying the theory of asymptomatic
        transmission, which was never really a thing before Covid-19 came along.
        And to this day, still doesn’t hold up under any reliable scientific
        data. See this
        <a
          target="_blank"
          href="https://odysee.com/@drsambailey:c/Odysee-Exclusive---Covid-19-Asymptomatic-Transmission-Small-Video-:e"
          >link to a video explaining the weak theory of asymptomatic
          transmission</a
        >.
      </p>
      <p>
        Gyms were closed for a period of time - the place many people use for
        exercise purposes, to combat health issues and strengthen one’s immune
        system. Where’s the logic in shutting these facilities down? A curfew
        had been implemented for a time, and may in fact still be implemented in
        some parts of the world. Is the virus somehow more prevalent after 10pm?
        Someone please explain this to me. And of course lockdowns are still not
        ruled out as a course of action. No-one has been able to show that
        lockdowns work in terms of “flattening the curve.” But they certainly
        have proven to increase suicide rates, domestic abuse, loneliness,
        depression, and the list goes on. Do I even need to mention the
        devastation of small businesses or the rise in social welfare
        dependance?
      </p>
      <p>
        It’s difficult to not go on about the horrendous measures taken by our
        leaders, especially after how much we’ve already learned about this
        respiratory virus. This is also not to say that we don’t acknowledge
        that people have died. But we’re talking about a very small percentage
        of the population here (statistically). When you take into account the
        context of how many people actually die every year (another thing
        rarely, if ever, covered by mainstream media), Covid-19 evidently
        becomes trivial. Full-recovery stats are impressively high but
        unfortunately not news-worthy. Flu (respiratory virus) related deaths
        have been happening all around the world long before Covid-19 showed up
        and are certainly not uncommon. Quite honestly, by looking at the
        scientific data we’ve collected over the past year, if you’re not
        suffering from diabetes, obesity, heart disease or any other
        moderate-to-severe underlying health condition (or have a weakened
        immune system due to old-age, for example), you really have no reason to
        fear this thing. And if you do have one of these conditions mentioned,
        then in your case, yes, perhaps you should be more cautious. But even
        more than that, in my unprofessional opinion, you should begin to make
        an effort to take better care of your health by means of eating more
        healthily and incorporating exercise into your daily lifestyle. You may
        want to seek professional help on the subject, if necessary.
      </p>
      <p>
        Nevertheless, I’d like to share a few encouraging things with you
        despite what's going on around the world. I'd like to encourage you not
        to fear and not to lose hope. Do not be dismayed by the message of the
        media and the fear headlines we've been bombarded with. I have strong
        reason to believe that this virus is not as bad as the media may portray
        it to be. And I personally am not going to cower in fear nor treat any
        person I come into contact with as if they're a potential biohazard. I
        hope you join me. By reading through the resources I’m about to share
        with you, you will begin to see that the media (whether intentionally or
        not) are in fact exacerbating this problem. I hope this message can
        encourage you and that the resources here can help you understand that
        fear and worry, are not healthy for you and certainly not helpful in any
        way. Virus or not, let's not give in to fear. Let's open up our minds to
        positivity and hopefulness so we can get through this
        troubling/frustrating/annoying time and even get through whatever else
        may come our way.
      </p>
    </template>

    <template v-slot:attachments>
      <AttachmentOne />
      <AttachmentTwo />
      <AttachmentThree />
      <AttachmentFour />
      <AttachmentFive />
      <AttachmentSix />
      <AttachmentSeven />
    </template>

    <template v-slot:conclusion>
      <h4 class="text-left">A Summary & Conclusion:</h4>
      <div class="rounded-quote-text-box">
        <p>
          “Disease and health, like circumstances, are rooted in thought. Sickly
          thoughts will express themselves through a sickly body. Thoughts of
          fear have been known to kill a man as speedily as a bullet, and they
          are continually killing thousands of people just as surely though less
          rapidly. The people who live in fear of disease are the people who get
          it.”
        </p>
        <p class="mt-1">
          <span class="font-italic">As A Man Thinketh</span>,
          <span class="font-weight-bolder">James Allen</span>.
        </p>
      </div>

      <div class="rounded-quote-text-box">
        <p>
          “In the main, man fears ill health because of the terrible pictures
          which have been planted in his mind of what may happen if death should
          overtake him.”
        </p>
        <p class="mt-1">
          “Powerful and mighty is the human mind! It builds or it destroys.”
        </p>
        <p class="mt-1">
          “There is overwhelming evidence that disease sometimes begins in the
          form of negative thought impulse.”
        </p>
        <p class="mt-1">
          <span class="font-italic">Think And Grow Rich</span>,
          <span class="font-weight-bolder">Napoleon Hill</span>
        </p>
      </div>

      <div class="rounded-quote-text-box">
        <p>“Worry causes health problems.”</p>
        <p class="mt-1"><span class="font-weight-bolder">Jim Rohn</span>.</p>
      </div>

      <div class="rounded-quote-text-box">
        <p>“Perturbing emotions are bad for health.”</p>
        <p class="mt-1">
          “People who experienced chronic anxiety, long periods of sadness and
          pessimism, unremitting tension or incessant hostility, relentless
          cynicism or suspiciousness, were found to have double the risk of
          disease.”
        </p>
        <p class="mt-1">
          “Anxiety—the distress evoked by life's pressures—is perhaps the
          emotion with the greatest weight of scientific evidence connecting it
          to the onset of sickness and course of recovery.”
        </p>
        <p class="mt-1">
          <span class="font-italic">Emotional Intelligence</span>,
          <span class="font-weight-bolder">Daniel Goleman</span>
        </p>
      </div>

      <p class="text-left">
        The media, books, articles, stories, videos, music etc. one consumes,
        whether we want to acknowledge this or not, plays a powerfully
        influential role in one’s mind. And thus, surely playing a key role in
        the influence of one’s emotions. For a moment, think about how
        debilitating, discouraging, scary and depressing our mainstream news has
        become. Also, consider the frequency of your own consumption of this
        type of news. Do you watch/read the news everyday? What impact do you
        think this would have on your own mind and on your own thinking
        patterns? Would this more likely result in a positive or negative
        outlook on your life? Would the effects of consistent negativity, not
        render your body more susceptible to disease? I mean, that is
        essentially what the evidence clearly points to.
      </p>
      <p class="text-left">
        To clarify, I’m not advocating the prohibition of news media. But I
        would like you to think about all the things your mind is regularly
        being influenced by. And be mindful/conscious of what these things could
        be doing to your psyche, your emotions, your spirit; and in turn, your
        body and its important immune system. Try to be more active in selecting
        predominantly positive content for your mind and trim the “fat” (the
        negativity) where possible. I’m also not saying that you should avoid
        the truth. But also do not mistake what you see/read to be absolute
        truth. We should all constantly and consistently be seeking truth,
        always be open to healthy debate and discussion and keep exposing the
        lies.
      </p>
    </template>

    <template v-slot:anythingExtra>
      <div class="text-center p-2">
        <router-link to="/covid19">
          <button class="btn btn-primary text-wrap">
            Real Doctors Expose Covid-19 Narrative
          </button>
        </router-link>
      </div>
    </template>
  </BlogItem>
</template>
