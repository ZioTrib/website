<template>
  <v-parallax
    :src="require('@/assets/background.png')"
    height="auto">
    <v-row
      style="margin-top: 5%"
      justify="center"
    >
      <div class="text-lg-h1 text-md-h1 text-h2 text-center black--text mb-10">
        My Works
      </div>
    </v-row>
    <v-row

      justify="center">
      <v-col v-for="card in cards"
             :key="card.title"
      >
        <v-card
          class="card_id mx-auto my-12"
          color="rgb(255, 255, 255, 0.0)"
          max-width="374"
        >
          <v-img
            height="250"
            :src="card.img"
          ></v-img>

          <div class="text-h5 font-weight-bold ma-5">{{ card.title }}</div>
          <v-chip>{{ card.tag }}</v-chip>

          <v-card-text>
            <div>{{ card.text }}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            <v-btn class="my-10 mx-5"
                   rounded
                   dark
                   color="terziario"
                   :href="card.report"
                   target="_blank"
                   large
            >
              Read the Report
            </v-btn>
            <v-btn class="my-10 mx-5"
                   rounded
                   color="terziario"
                   :href="card.gitRepo"
                   large
                   icon
            >
              <v-icon>
                mdi-github
              </v-icon>
            </v-btn>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "Portfolio",

  data: () => ({

    cards: [
      {
        title: "Google Play Store App Rating Prediction",
        img: "https://techcrunch.com/wp-content/uploads/2019/05/google-play-store-ratings.jpg",
        report: "https://github.com/ZioTrib/BDA_project/blob/main/report/midterm3_BDA_project.pdf",
        gitRepo: "https://github.com/ZioTrib/BDA_project",
        tag: "Machine Learning",
      },
      {
        title: "Airline Ticket Booking Database Design",
        img: "https://img.cheapair.com/uploads/2016/02/whentobuy-e1455745258419.jpg",
        report: "https://github.com/ZioTrib/BD_project/blob/main/BD_project_report.pdf",
        gitRepo: "",
        tag: "Database",
        text: ""
      },
      {
        title: "Geological Resources Visualization in Italy",
        img: "https://www.un-spider.org/sites/default/files/190401_italy%20edited.jpg",
        report: "https://github.com/ZioTrib/progetto_VA/blob/main/report/VA_project_report.pdf",
        gitRepo: "https://github.com/ZioTrib/progetto_VA",
        tag: "Visual Analytics",
        text: ""
      },
      {
        title: "Google Ads Campaign",
        img: "https://www.wearemarketing.com/media/cache/dynamic/rc/rrepl4Kc//uploads/media/default/0001/21/cd02f7f6393676420be1f04e6ca4b191344ee313.jpeg",
        report: "https://github.com/ZioTrib/TWM-project/blob/main/TWM_project.pdf",
        gitRepo: " ",
        tag: "Analytics",
        text: ""
      },
      {
        title: "Predicting Room Occupancy",
        img: "https://www.trueoccupancy.com/hubfs/Meeting%20Room.png",
        report: "https://github.com/ZioTrib/DM2-project/blob/master/Report_prog_DM2.pdf",
        gitRepo: "https://github.com/ZioTrib/DM2-project",
        tag: "Data Mining",
        text: ""
      },
      {
        title: "Carvana - Is a Bad Buy?",
        img: "https://www.lautomobile.aci.it/fileadmin/_processed_/d/9/csm_carvana-dealer-store-vending-machine_6d338fe8b1.jpg",
        report: "https://github.com/ZioTrib/DM1-project/blob/main/DM1_Project.pdf",
        gitRepo: "https://github.com/ZioTrib/DM1-project",
        tag: "Data Mining",
        text: ""
      }

    ]
  }),
}


</script>

<style scoped>

</style>
