<template>
  <div>
    <b-dropdown id="ddown1" text="Dropdown Button sm" class="m-md-2">
      <b-dropdown-header>This is a heading</b-dropdown-header>
      <b-dropdown-item @click="roteia">Action</b-dropdown-item>
      <b-dropdown-item>Another action</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Something else here...</b-dropdown-item>
      <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    </b-dropdown>
    <b-button-group>
      <b-button>Button 1</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
      <b-button>Button 4</b-button>
      <b-button>Button 5</b-button>
    </b-button-group>
    <br><br>
    <b-button-group>
      <b-button variant="success">Success</b-button>
      <b-button variant="info">Info</b-button>
      <b-button variant="warning">Warning</b-button>
      <b-button variant="primary">Primary</b-button>
      <b-button variant="danger">Danger</b-button>
      <b-button variant="link">Link</b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: 'events',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
