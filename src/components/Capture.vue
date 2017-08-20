<template>
  <div class="container">
    <h5>Insira o Código do Produto</h5>
    <b-form-input type="text" class="row-filter col-10 offset-1" v-model="product_id" placeholder="Código do Produto"></b-form-input>

    <b-button  class="row-filter" @click.native="capture" variant="primary">
      Comprar Agora!
    </b-button>

    <b-media vertical-align="center" class="row-filter">
      <div style="margin: auto;" id="my_camera"></div>
    </b-media>

    <b-media vertical-align="center">
      <img :src="qrCode" v-if="false">
    </b-media>

    <div class="row">
      <video muted autoplay class="col-8 offset-2" height="100%"></video>
      <div class="select row-filter col-8 offset-2">
        <label for="videoSource">Escolha sua câmera!</label>
        <!-- <select id="videoSource"></select> -->
        <b-form-select id="videoSource" class="mb-3"></b-form-select>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase/firebase.js'
import QrCode from 'qrcode-reader'
const qr = new QrCode();

export default {
  name: 'capture',

  data () {
    return {
      product_id: '',
      qrCode: null
    }
  },

  methods: {

    capture () {
      var ref = firebase.database().ref('events')
      ref.once('value')
        .then(snapshot => {
          const product = snapshot
            .child('-KrtItSWwIXHQpQ6CRbB')
            .child('products')
            .child(this.product_id)
            .val()

          if (!product) {
            toastr.success('Sucesso!', { positionClass: "toast-bottom-center" })
            throw new Error('Produto nÃ£o existente')
          }

          this.productDetail()
        })
        .catch((error) => {
          alert(error.message)
        });
    },

    productDetail () {
      setTimeout(() => {
        this.$router.push('/product/' + this.product_id)
      }, 300)
    },

    takePhoto () {
      var img = document.querySelector('img') || document.createElement('img');
      var context;
      var width = document.querySelector('video').offsetWidth
      var height = document.querySelector('video').offsetHeight;

      var canvas = canvas || document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      context = canvas.getContext('2d');
      context.drawImage(document.querySelector('video'), 0, 0, width, height);

      img.src = canvas.toDataURL('image/png');
      this.qrCode = img.src

      if (this.qrCode) {
        console.log(qr.decode(this.qrCode))
      }
    }

  },

  mounted () {
    let qrcodeLoop

    qr.callback = (error, result) => {
      if (error) {
        console.log('Error during QR decode: ', error)
        return;
      } else {
        clearInterval(qrcodeLoop)
        this.product_id = result.result
        this.productDetail()
      }
    }

    var videoElement = document.querySelector('video');
    var videoSelect = document.querySelector('select#videoSource');

    navigator.mediaDevices.enumerateDevices()
      .then(gotDevices).then(getStream).catch(handleError);

    videoSelect.onchange = getStream;

    function gotDevices (deviceInfos) {
      for (var i = 0; i !== deviceInfos.length; ++i) {
        var deviceInfo = deviceInfos[i];
        var option = document.createElement('option');
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === 'videoinput') {
          option.text = deviceInfo.label || 'camera ' +
            (videoSelect.length + 1);
          videoSelect.appendChild(option);
        } else {
          console.log('Found ome other kind of source/device: ', deviceInfo);
        }
      }
    }

    function getStream () {
      if (window.stream) {
        window.stream.getTracks().forEach(function (track) {
          track.stop();
        });
      }
      var constraints = {
        video: {
          optional: [{
            sourceId: videoSelect.value
          }]
        }
      };
      navigator.mediaDevices.getUserMedia(constraints).
        then(gotStream).catch(handleError);
    }

    function gotStream (stream) {
      window.stream = stream; // make stream available to console
      videoElement.srcObject = stream;
    }

    function handleError (error) {
      console.log('Error: ', error);
    }

    qrcodeLoop = setInterval(() => {
      this.takePhoto()
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
