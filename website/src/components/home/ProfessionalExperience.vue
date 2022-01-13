<template>
  <section class="experience">
      <div class="content">
          <div class="about-info">
              <div class="content">
                  <h1>{{$t('home.experience.title')}}</h1>
                  <div class="current-work" data-cy="current-works">
                    <Card v-for="(exp, i) in $t('home.experience.current')" :key="i" id="current-work" :title="exp.title">
                      <p v-for="(topic, index) in exp.topics" :key="index" data-cy="current-work-topic">- {{topic}}</p>
                      <a v-if="exp.button" :href="exp.button.href" class="btn btn-secondary" data-cy="current-work-btn">{{exp.button.text}}</a>
                    </Card>
                  </div>

                  <div class="past-works" data-cy="past-works">
                    <Card v-for="(exp, i) in $t('home.experience.past')" :key="i" id="past-work" :title="exp.title">
                      <p v-for="(topic, index) in exp.topics" :key="index" data-cy="past-work-topic">- {{topic}}</p>
                    </Card>
                  </div>

                  <div class="experience-buttons">
                      <a :href="`${$t('home.experience.resume.href')}`" class="btn btn-lg btn-secondary" data-cy="resume-button">{{$t('home.experience.resume.text')}}</a>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
    name: "ProfessionalExperience",
    components: { Card }
}
</script>