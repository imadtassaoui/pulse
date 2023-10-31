<script setup lang="ts">
const sizes: string[] = ["xs", "s", "m", "l", "xl"];
const activeSize = useState("activeSize", () => "");

const productInfos: string[] = ["details", "fabric & fit"];
const activeProductInfo = useState("activeProductInfo", () => "details");
</script>

<template>
  <div class="overflow-x-hidden">
    <div class="pt-24 pb-8 flex flex-col gap-5 w-full lg:flex-row">
      <div
        class="flex ml-4 lg:w-full overflow-x-scroll lg:overflow-hidden lg:flex-wrap gap-2 md:h-[556px] h-[408px] lg:h-auto"
      >
        <img
          class="lg:w-[calc(50%-8px)] h-full w-fit lg:h-fit"
          src="../../assets/hoodie1.png"
          alt=""
        />
        <img
          class="lg:w-[calc(50%-8px)] h-full w-fit lg:h-fit"
          src="../../assets/hoodie2.png"
          alt=""
        />
        <img
          class="lg:w-[calc(50%-8px)] h-full w-fit lg:h-fit"
          src="../../assets/hoodie1.png"
          alt=""
        />
        <img
          class="lg:w-[calc(50%-8px)] h-full w-fit lg:h-fit"
          src="../../assets/hoodie2.png"
          alt=""
        />
        <img
          class="lg:w-[calc(50%-8px)] h-full w-fit lg:h-fit"
          src="../../assets/hoodie1.png"
          alt=""
        />
      </div>
      <div class="flex flex-col px-4 gap-8 max-w-[488px] lg:sticky lg:top-0">
        <div class="flex flex-col gap-5">
          <H2>LVCIDIA Hoodie</H2>
          <p class="text-2xl">€95</p>
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="text-xl">size</h3>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="size in sizes"
              @click="activeSize = size"
              :class="{
                'p-4 w-16 h-16 border border-black/10 flex items-center justify-center text-base pointer': true,
                'bg-black text-white': activeSize === size,
              }"
            >
              <p class="font-primary">{{ size }}</p>
            </div>
          </div>
        </div>
        <Button>add to cart</Button>
        <div class="w-full h-[1px] bg-dark-20" />
        <div class="flex flex-col gap-5">
          <div>
            <div class="flex flex-wrap gap-5">
              <h4
                v-for="product in productInfos"
                :class="{
                  'text-dark-30 pointer': activeProductInfo !== product,
                  'text-black pointer': activeProductInfo === product,
                }"
                @click="activeProductInfo = product"
              >
                {{ product }}
              </h4>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Enim imperdiet mauris orci
            ac eget vel. Neque commodo tristique tincidunt in ligula sed.
          </p>
        </div>
      </div>
    </div>
    <Products type="filtered" headline="you may also like" />
  </div>
</template>
