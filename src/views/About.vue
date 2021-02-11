<template>
  <v-parallax
    :src="require('@/assets/background_long.png')"
    height="auto">
    <v-row
      style="margin-top: 5%"
      justify="center"
    >
      <div class="text-lg-h1 text-md-h1 text-h2 black--text text-center">
        Resume
      </div>
    </v-row>
<v-row
  justify="center"
>

      <v-col xl="6"
             lg="6"
             md="8"
             sm="10"
             xs="11"
             center
      >
      <div class="text-h4  mt-10 mb-7 black--text font-weight-thin text-left">
        Experience
      </div>
    <v-card
      v-for="item in experience"
      :key="item.text"
      color="rgb(255,255,255, 0.5)"
      class="card_id mb-7"
    >
      <v-row>
      <v-col
        cols="11"
        class="text-left mx-10 my-2"
      >
        <div class="text-h5 font-weight-bold">
        {{ item.years }}
        </div>
        <div class="text-body-1 my-2">
          {{ item.jobPosition }}
        </div>
        <div class="text-body-2">
          {{ item.company }}

        </div>
        <div class="text-body-2 font-weight-thin">
        {{ item.place }}
        </div>

      </v-col>
      <v-col
        class="text-justify mx-10 my-2"
      >
        <div class="text-body-1">
          {{ item.text}}
        </div>
      </v-col>
      </v-row>
    </v-card>
        <div class="text-h4  mt-10 mb-7 black--text  font-weight-thin text-left">
      Education
    </div>
        <v-card
          v-for="item in education"
          :key="item.text"
          color="rgb(255,255,255, 0.5)"
          class="card_id mb-7"
        >
          <v-row>
            <v-col cols="11"
                   class="text-left mx-10 my-2"
            >
              <div class="text-h5 font-weight-bold">
                {{ item.years }}
              </div>
              <div class="text-body-1 my-2">
                {{ item.degree }}
              </div>
              <div class="text-body-2">
                {{ item.university }}

              </div>
              <div class="text-body-2 font-weight-thin">
                {{ item.vote }}
              </div>
            </v-col>
            <v-col
              class="text-left mx-10 my-2"
            >
              <div class="text-body-1 text-justify">
                {{ item.text}}
              </div>
              <div class="text-body mt-2 text-justify">
                <strong> THESIS: </strong> <i> {{item.thesis}} </i>
              </div>
              <div class="text-body mt-2 text-justify">
              {{item.thesis_des}}
              </div>
            </v-col>
          </v-row>
        </v-card>
        <div class="text-h4  mt-10 mb-7 black--text  font-weight-thin text-left">
          Professional Skills
        </div>
        <v-card
          color="rgb(255,255,255, 0.5)"
          class="card_id mb-7"
        >
          <v-col>
          <div class="text-h5 my-10  font-weight-bold">
            <v-icon color="black">mdi-xml</v-icon>
            Programming Languages
          </div>
          <v-row>
            <v-col
              content="center"
              v-for="item in PL"
              :key="item.value"
            >
              <div class="my-2 text-center text-button">
                {{ item.text }}
              </div>
              <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="15"
                :value="item.value"
                color="terziario"
              >
                <div class="black--text text-button">
                  {{ item.value }}%
                </div>
              </v-progress-circular>
            </v-col>
          </v-row>
          <v-divider class="mt-4"></v-divider>

          <div class="text-h5 my-10  font-weight-bold">
            <v-icon color="black">mdi-brain</v-icon>
            Machine Learning
          </div>
          <v-row>
            <v-col
              content="center"
              v-for="item in ML"
              :key="item.value"
            >
              <div class="my-2 text-center text-button">
                {{ item.text }}
              </div>
              <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="15"
                :value="item.value"
                color="terziario"
              >
                <div class="black--text text-button">
                  {{ item.value }}%
                </div>
              </v-progress-circular>
            </v-col>
          </v-row>
          <v-divider class="mt-4"></v-divider>

          <div class="text-h5  font-weight-bold my-10">
            <v-icon color="black">mdi-database</v-icon>
Data Analysis
          </div>
          <v-row>
            <v-col
              content="center"
              v-for="item in DA"
              :key="item.value"
            >
              <div class="my-2 text-center text-button">
                {{ item.text }}
              </div>
              <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="15"
                :value="item.value"
                color="terziario"
              >
                <div class="black--text text-button">
                  {{ item.value }}%
                </div>
              </v-progress-circular>
            </v-col>
          </v-row>
          <v-divider class="mt-4"></v-divider>
          <div class="text-h5 my-10  font-weight-bold">
            <v-icon color="black">mdi-remote-desktop</v-icon>
            Front End
          </div>
          <v-row>
            <v-col
              content="center"
              v-for="item in FE"
              :key="item.value"
            >
              <div class="my-2 text-center text-button">
                {{ item.text }}
              </div>
              <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="15"
                :value="item.value"
                color="terziario"
              >
                <div class="black--text text-button">
                  {{ item.value }}%
                </div>
              </v-progress-circular>
            </v-col>
          </v-row>
          </v-col>
        </v-card>
    </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  data: () => ({
    experience: [
      {
        years: 'apr 2018 - ott 2018',
        jobPosition: 'Cost Analysis Intern',
        company: 'FCA Fiat Chrysler Automobiles',
        place: 'Cassino (FR) - Alfa Romeo Plant',
        text: 'Cost Data Analysis Support for the identification of waste and production losses in order to improve the Business Organization.',
      },
      {
        years: 'lug 2017 - mag 2018',
        jobPosition: 'Student Representative for the Economics and Law Departmental Council',
        company: 'University of Cassino',
        place: 'Cassino (FR)',
        text: 'Attendance at meetings of the Departmental Council to regulate the organisation and functions of the Department',
      },
      {
        years: 'feb 2017 - mag 2017',
        jobPosition: 'Employee',
        company: 'Poste Italiane',
        place: 'Fondi (LT)',
        text: 'Sorting of incoming mail and cataloguing.\n' +
          'Delivery and collection of correspondence, parcels, telegrams and registered mail.\n' +
          'Delivery of mail and parcels on delive',
      },
    ],
    education: [
      {
        years: 'sep 2019 - present',
        degree: 'Master degree in Data Science and Business Informatics',
        university: 'University of Pisa',
        vote: '',
        text: 'The two year graduate program in Data Science and Business Informatics has been designed to meet the growing demand for professionals with an interdisciplinary skill both in informatics and in business to satisfy the increasing demand by companies to compete using analytics methods. The graduate program is focused on Business Intelligence and Data Science techniques to support decision making.',
        thesis: "",
      },
      {
        years: 'sep 2015 - apr 2019',
        degree: 'Bachelor degree in Business Economics',
        university: 'University of Cassino',
        vote: '98/110',
        text: 'The degree course in Business Economics focuses not only on the study of the basic subjects typical ' +
          'of the generality of economics courses, but on the in-depth study of characterizing and specific disciplines in ' +
          'the business, management and administrative sphere. The specific training objectives can be summarized in ' +
          'the acquisition of skills in the areas, mathematics-statistics, economics, business-management, law.',
        thesis: "Data-Driven Decision making for organizational improvement: case FCA Cassino Plant.",
        thesis_des:"The thesis aimed to identify a possible decision-making model to support the designation and" +
          " management of projects that allows the organization to achieve the objectives in efficiency."
      },
    ],

    PL: [
      {
        value: '80',
        text: 'Python',
      },
      {
        value: '50',
        text: 'C code',
      },
      {
        value: '50',
        text: 'JavaScript',
      },
    ],
    ML: [
      {
        value: '80',
        text: 'Supervised ML',
      },
      {
        value: '70',
        text: 'Unsupervised ML',
      },
      {
        value: '60',
        text: 'Deep Learning',
      },
    ],
    DA: [
      {
        value: '75',
        text: 'Databases',
      },
      {
        value: '70',
        text: 'ETL',
      },
      {
        value: '60',
        text: 'Statistics',
      },
    ],
    FE:
      [
      {
        value: '80',
        text: 'Data Viz',
      },
      {
        value: '60',
        text: 'Vue.js',
      },
      {
        value: '50',
        text: 'HTML & CSS',
      },
    ]
  }),

}

</script>

<style lang="scss">
.container .row {
  margin: 20px;
  text-align: center;
}

.container .row img {
  margin: 0 20px;
}


</style>
