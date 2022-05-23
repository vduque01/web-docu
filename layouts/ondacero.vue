<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <CReset />
          <CFlex justify-content="center" borderBottom="0.8px solid black">
            <global-navigation />
          </CFlex>
          <CFlex justify-content="center">
            <CFlex w="1040px">
              <CBox class="lateral_menu" minW="264px" p="4" borderRight="0.8px solid black">
                <navigation-onda-cero />
              </CBox>
              <Nuxt />
            </CFlex>
          </CFlex>
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
} from "@chakra-ui/vue";

export default {
  name: "DefaultLayout",
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
  },
};
</script>
