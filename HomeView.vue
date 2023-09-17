<template>
  <header class="container">
    <h1 class="page-title" style="text-align:center">Task 2.3 Composition API</h1>
  </header>
  <main class="container grid-main">
    <!-- 1. Template Syntax -->
    <div class="wrap">
      <!-- a. Text Interpolation -->
      <p>a. Text Interpolation</p>
      <p>{{ message }}</p><br>

      <!-- b. Raw HTML [v-html] -->
      <p>b. Raw HTML</p>
      <div v-html="rawHtml"></div><br>

      <!-- c. Attribute Bindings -->
      <p>c. Attribute Bindings</p>
      <p :id="dynamicID">Dynamically binded</p><br>

      <!-- d. JavaScript -->
      <p>d. JavaScript</p>
      <p>{{ '25 * 4 equals ' + (25 * 4) }}</p><br>
    </div>

    <!-- 2. Methods -->
    <div class="wrap">
      <p>2. Method</p>
      <button @click="sayHello">Click</button>
    </div>

    <!-- 3. Reactivity Fundamentals -->
    <div class="wrap">
      <p>3. Reactive Value</p>
      <p>{{ reactiveValue }}</p>
    </div>

    <!-- 4. Computed Properties -->
    <div class="wrap">
      <p>4. Computed Properties</p>
      <p>{{ computedValue }}</p>
    </div>

    <!-- 5. Class and Style Bindings -->
    <div class="wrap">
      <p>5. Class and Style Bindings</p>
      <!-- a. Binding HTML class -->
      <p :class="{ active: isActive }">Class binding</p>
      <!-- b. Binding Inline Styles -->
      <p :style="{ color: textColor }">Style binding</p>
    </div>

    <!-- 6. List Rendering -->
    <div class="wrap">
      <p>6. List Rendering</p>
      <!-- a. v-for with an Object -->
      <p>a. Object v-for</p>
      <ul>
        <li v-for="(value, key) in objectData" :key="key">{{ key }}: {{ value }}</li>
      </ul><br>

      <!-- b. v-for with a Range -->
      <p>b. Range v-for</p>
      <ul>
        <li v-for="n in 5" :key="n">{{ n }}</li>
      </ul><br>

      <!-- c. v-for on <template> -->
      <p>c. Template v-for</p>
      <ul>
        <template v-for="item in listData" :key="item.id">
          <li>{{ item.name }}</li>
        </template>
      </ul><br>

      <!-- d. v-for with v-if -->
      <p>d. v-if with v-for (Item 2 not visible)</p>
      <ul>
        <li v-for="item in items" :key="item.id">
          <p v-if="item.isVisible">{{ item.name }}</p>
        </li>
      </ul><br>

      <!-- e. v-for with a Component -->
      <p>e. v-for Component</p>
      <ul>
        <SimpleComponent v-for="n in 2" :key="n" />
      </ul><br>
    </div>

    <div class="wrap">
      <p>7. Event Handling</p>
      <!-- 7. Event Handling: Listening to Events [v-on:click] -->
      <!-- a. Inline Handlers -->
      <button @click="counter++">Inline Handler</button><br>
      <p>{{ counter }}</p>

      <!-- b. Method Handlers -->
      <button @click="methodHandler">Method Handler</button>
      <br>
    </div>

    <div class="wrap">
      <p>8. Form Input Bindings</p>
      <!-- 8. Form Input Bindings -->
      <!-- a. Input -->
      <input type="text" v-model="textInput" /><br>
      <input type="checkbox" v-model="checkboxValue" /><br>
      <input type="radio" value="radioOption" v-model="radioValue" /><br>
      <select v-model="selectedOption">
        <option disabled value="">Please select one</option>
        <option value="selectOption1">Option 1</option>
        <option value="selectOption2">Option 2</option>
      </select><br><br>
      <textarea v-model="textAreaValue"></textarea><br>
      <br><br>
      <p>Output</p>
      <p>Text Input: {{ textInput }} </p>
      <p>Checkbox value: {{ checkboxValue }} </p>
      <p>Radio value: {{ radioValue }} </p>
      <p>Selection value: {{ selectedOption }} </p>
      <p>Text area value: {{ textAreaValue }}</p>
      <br>
      <br>
      <br>

      <!-- b. Modifiers -->
      <p>v-model Modifiers</p>
      <input type="text" v-model.trim="lazy" placeholder="Lazy" /><br>
      <input type="text" v-model.number="number" placeholder="Number" /><br>
      <input type="text" v-model.trim="trim" placeholder="Trim" /><br>
      <br>
      <p>.lazy: {{ lazy }}</p>
      <p>.number: {{ number }}</p>
      <p>.trim: {{ trim }}</p>
    </div>

    <div class="wrap">
      <!-- 9. Watcher -->
      <p>9. Watcher: see console</p>
      <p>Value: {{ watchValue }}</p>
      <input type="text" v-model="watchValue" />
    </div>

    <div class="wrap">
      <!-- 10. Component Parent-Child -->
      <p>10. Component Parent-Child</p>
      <div style="border: 1px dotted red;">
        <p>I am the parent</p>
        <p style="color: blue;">{{ msg }}</p>
        <button @click="changeMessage">Change Message via Parent</button>
        <br><br>
        <ChildComp :childMessage="msg" @childEvent="handleChildEvent" style="width: 90%; margin: 2rem auto;">
          <p>This is content from the parent component using a slot.</p>
        </ChildComp>
      </div>
    </div>

    <div class="wrap">
      <!-- 11. Router -->
      <p>11. Router</p>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/page2">Another Page</router-link>
      </nav>
    </div>

    <br>
  </main>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

import SimpleComponent from '@/components/SimpleComponent.vue'
import ChildComp from '@/components/ChildComp.vue'
import NavigationComponent from '@/components/NavigationComponent.vue'

// ... (variable definitions and event handlers from your original code)
</script>

<style lang="scss" scoped>
// ... (your original styles)
</style>
