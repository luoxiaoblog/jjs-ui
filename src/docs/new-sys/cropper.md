## 图片裁剪

图片裁剪使用的是[Cropper][https://github.com/fengyuanchen/cropper/blob/master/readme.md],这是一款简单的 jQuery 图片裁剪插件。

使用此插件需要引入以下文件：

```html
<link
  rel="stylesheet"
  href="https://front.leyoujia.com/plugins/cropper/cropper.css"
/>
<script src="https://front.leyoujia.com/plugins/cropper/cropper.js"></script>
```

### 基本用法

:::demo 通过`$.fn.cropper`初始化

```html
<!-- Wrap the image or canvas element with a block element (container) -->
<div style="width: 500px; height: 300px;">
  <img
    id="image"
    style="max-width: 100%;"
    src="http://n.sinaimg.cn/sinacn17/740/w1440h900/20180403/721a-fytnfyn8010148.jpg"
  />
</div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#image').cropper({
      aspectRatio: 16 / 9
    })
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$('#image').cropper({
  aspectRatio: 16 / 9
}) //DEMO_JS_SHOW_END
</script>
```

:::

### 实际案例

:::demo

```html
<style>
/* 图片上传 */
#myModal-upload-img .modal-dialog {
  width: 600px;
  height: 380px;
}

#picCon {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-color: #fff;
}

#picCon .picTop {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
  padding-left: 15px;
  font-weight: 900;
  position: relative;
}

#picCon .picTop span {
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
}

#picCon .picLeft {
  width: 65%;
  height: 100%;
  float: left;
  position: relative;
}

#picCon .picLeft .img-container {
  margin: 0 auto;
  width: 360px;
  height: 252px;
  background-color: #f2f2f2;
}

.img-container img {
  max-width: 100%;
  max-height: 100%;
}

#picCon .picLeft span {
  font-size: 12px;
}

#picCon .pic-upload {
  width: 75px;
  height: 30px;
  margin-left: 20px;
  margin-bottom: 15px;
  margin-top: 10px;
  overflow: hidden;
}

#picCon .pic-upload #file_upload {
  display: none;
}

#picCon .picLeft .btnToConfirm {
  text-align: center;
  height: 28px;
  line-height: 28px;
  width: 100%;
  margin-top: 15px;
}

#picCon .picLeft .btnToConfirm button {
  outline: none;
  cursor: pointer;
}

#picCon .picRight {
  padding-left: 10px;
  width: 35%;
  height: 100%;
  float: left;
  text-align: center;
}

#picCon .picRight p {
  line-height: 30px;
  margin-top: 10px;
}

#picCon .picRight .previewImageSize {
  margin: 66px auto 0;
  width: 160px;
  height: 160px;
}

#picCon .picRight .preview-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
}
</style>

<button
  type="button"
  class="btn btn-primary"
  data-toggle="modal"
  data-target="#myModal-upload-img"
>
  上传图片
</button>
<div
  class="modal fade"
  id="myModal-upload-img"
  tabindex="-1"
  role="dialog"
  aria-labelledby="myModalLabel"
  aria-hidden="true"
  data-backdrop="static"
  data-keyboard="false"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-hidden="true"
        >
          ×
        </button>
        <h5>上传图片</h5>
      </div>
      <div class="modal-body" style="overflow:hidden;">
        <div id="picCon">
          <div class="picLeft">
            <div class="clearfix w100">
              <div class="fl pic-upload">
                <button id="uploadBtn" type="button" class="btn btn-white">
                  上传图片
                </button>
                <div id="queue" class="queue"></div>
                <input
                  id="file_upload"
                  name="file_upload"
                  type="file"
                  accept="image/jpeg,image/jpg,image/png"
                />
                <input id="imageUrl" name="imageUrl" type="hidden" />
              </div>
              <span class="fl mt10 ml5 line-28"
                >图片要求：jpg或png格式，且大小不能超过5M</span
              >
            </div>
            <div class="clearfix w100 text-center">
              <div class="img-container">
                <img
                  src="https://front.leyoujia.com/pluginsAPI/plugins/cropper/none.jpg"
                  id="target"
                  alt="Picture"
                />
              </div>
            </div>
            <p class="btnToConfirm">
              <button class="pinConfirm btn btn-primary mr5" id="pinConfirm">
                确认
              </button>
              <button
                id="btnCannel"
                class="pinCancel btn btn-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                取消
              </button>
            </p>
            <img
              alt=""
              id="imgresizepreview"
              style="display: none;"
              src="https://front.leyoujia.com/pluginsAPI/plugins/cropper/none.jpg"
            />
            <canvas id="canvas_l" style="display: none"></canvas>
          </div>
          <div class="picRight">
            <p>当前尺寸: <span>160*160</span></p>
            <div class="previewImageSize">
              <div class="preview-container"></div>
            </div>
            <p class="tuijianImg">预览</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
//DEMO_JS_RUN_START
export default {
  mounted() {
    $('#uploadBtn').click(function() {
      $('#file_upload').click()
    })

    $('#file_upload').on('change', () => {
      var fileName = $('#file_upload').val()
      if (fileName) {
        var FileExt = fileName.replace(/.+\./, '')
        if (
          FileExt &&
          (FileExt.toLocaleLowerCase() == 'jpg' ||
            FileExt.toLocaleLowerCase() == 'png' ||
            FileExt.toLocaleLowerCase() == 'jpeg')
        ) {
          var url = this.getFileUrl('file_upload')
          if (url) {
            var fileSize = $('#file_upload')[0].files[0].size
            if (!fileSize || fileSize > 5 * 1024 * 1024) {
              noBtnAutoModalDialog('选择图片不能大于5M！')
              return
            }
            document.getElementById('imgresizepreview').src = url
            this.change(url)
          }
        } else {
          noBtnAutoModalDialog('只能使用 jpg,png,jpeg 文件！')
          $('#file_upload').val('')
        }
      }
    })
    $('#pinConfirm').click(() => {
      if (!$('#imgresizepreview').attr('src')) {
        noBtnAutoModalDialog('请先选择图片')
        return
      }
      var canvas_l = document.getElementById('canvas_l'),
        img = document.getElementById('imgresizepreview'),
        context_l = canvas_l.getContext('2d')
      var left =
        Math.abs(
          $('.preview-container')
            .find('img')
            .attr('data-left')
        ) || 0
      var top =
        Math.abs(
          $('.preview-container')
            .find('img')
            .attr('data-top')
        ) || 0
      var wc = $('.cropper-container')
        .children()
        .eq(0)
        .find('.cropper-canvas')
        .width()
      var hc = $('.cropper-container')
        .children()
        .eq(0)
        .find('.cropper-canvas')
        .height()
      var wp = $('.cropper-crop-box').width() //框
      var hp = $('.cropper-crop-box').height() //框
      var imgw = $('#imgresizepreview').width()
      var imgh = $('#imgresizepreview').height()
      canvas_l.setAttribute('width', wp)
      canvas_l.setAttribute('height', hp)
      var radioW = imgw / wc
      var radioH = imgh / hc
      context_l.drawImage(
        img,
        radioW * left,
        radioH * top,
        radioW * wp,
        radioH * hp,
        0,
        0,
        canvas_l.width,
        canvas_l.height
      )

      $('#imageUrl').val(canvas_l.toDataURL('image/jpeg', 0.8))

      var imageUrl = $('#imageUrl').val()
      if (imageUrl == '') {
        noBtnAutoModalDialog('您还没有上传图片')
        return
      }
      var imgData = $('#imageUrl').val()
      if (imgData.length > 1530700) {
        noBtnAutoModalDialog('剪切后的图片太大，请调整剪切尺寸！')
        return
      }
      // $("#pinConfirm").prop("disabled", true);
      var imgBlob = dataURLtoBlob(imageUrl)

      // 此处加上上传代码
      this.closeModal()

      // $("#pinConfirm").prop("disabled", false);
    })

    $('#btnCannel').click(() => {
      this.closeModal()
    })
  },
  methods: {
    change(img) {
      $('#target').attr('src', img)
      $('#target').cropper('destroy')
      this.cutImage()
    },
    cutImage() {
      $('#target').cropper({
        viewMode: 1,
        dragMode: 'move',
        preview: '.preview-container',
        cropBox: [160, 160],
        aspectRatio: 160 / 160,
        restore: false,
        guides: false,
        highlight: false,
        cropBoxMovable: false,
        cropBoxResizable: false,
        limitCanvasMinSize: true,
        minCanvasWidth: 160,
        minCanvasHeight: 160,
        minCropBoxWidth: 160,
        minCropBoxHeight: 160,
        minContainerHeight: 160,

        limitImageMinSize: true,
        minImageWidth: 160,
        minImageHeight: 160,
        center: true
      })
    },
    getFileUrl(sourceId) {
      var url = null
      if (navigator.userAgent.indexOf('MSIE') >= 1) {
        // IE
        url = document.getElementById(sourceId).value
      } else if (navigator.userAgent.indexOf('Firefox') > 0) {
        // Firefox
        url = window.URL.createObjectURL(
          document.getElementById(sourceId).files.item(0)
        )
      } else if (navigator.userAgent.indexOf('Chrome') > 0) {
        // Chrome
        url = window.URL.createObjectURL(
          document.getElementById(sourceId).files.item(0)
        )
      }
      return url
    },
    closeModal() {
      $('#myModal-upload-img').modal('hide')
    }
  }
}
//DEMO_JS_RUN_END//DEMO_JS_SHOW_START
$(function() {
  $('#uploadBtn').click(function() {
    $('#file_upload').click()
  })

  $('#file_upload').on('change', function() {
    var fileName = $('#file_upload').val()
    if (fileName) {
      var FileExt = fileName.replace(/.+\./, '')
      if (
        FileExt &&
        (FileExt.toLocaleLowerCase() == 'jpg' ||
          FileExt.toLocaleLowerCase() == 'png' ||
          FileExt.toLocaleLowerCase() == 'jpeg')
      ) {
        var url = getFileUrl('file_upload')
        if (url) {
          var fileSize = $('#file_upload')[0].files[0].size
          if (!fileSize || fileSize > 5 * 1024 * 1024) {
            noBtnAutoModalDialog('选择图片不能大于5M！')
            return
          }
          document.getElementById('imgresizepreview').src = url
          change(url)
        }
      } else {
        noBtnAutoModalDialog('只能使用 jpg,png,jpeg 文件！')
        $('#file_upload').val('')
      }
    }
  })

  $('#pinConfirm').click(function() {
    if (!$('#imgresizepreview').attr('src')) {
      noBtnAutoModalDialog('请先选择图片')
      return
    }
    var canvas_l = document.getElementById('canvas_l'),
      img = document.getElementById('imgresizepreview'),
      context_l = canvas_l.getContext('2d')
    var left =
      Math.abs(
        $('.preview-container')
          .find('img')
          .attr('data-left')
      ) || 0
    var top =
      Math.abs(
        $('.preview-container')
          .find('img')
          .attr('data-top')
      ) || 0
    var wc = $('.cropper-container')
      .children()
      .eq(0)
      .find('.cropper-canvas')
      .width()
    var hc = $('.cropper-container')
      .children()
      .eq(0)
      .find('.cropper-canvas')
      .height()
    var wp = $('.cropper-crop-box').width() //框
    var hp = $('.cropper-crop-box').height() //框
    var imgw = $('#imgresizepreview').width()
    var imgh = $('#imgresizepreview').height()
    canvas_l.setAttribute('width', wp)
    canvas_l.setAttribute('height', hp)
    var radioW = imgw / wc
    var radioH = imgh / hc
    context_l.drawImage(
      img,
      radioW * left,
      radioH * top,
      radioW * wp,
      radioH * hp,
      0,
      0,
      canvas_l.width,
      canvas_l.height
    )

    $('#imageUrl').val(canvas_l.toDataURL('image/jpeg', 0.8))

    var imageUrl = $('#imageUrl').val()
    if (imageUrl == '') {
      noBtnAutoModalDialog('您还没有上传图片')
      return
    }
    var imgData = $('#imageUrl').val()
    if (imgData.length > 1530700) {
      noBtnAutoModalDialog('剪切后的图片太大，请调整剪切尺寸！')
      return
    }
    $('#pinConfirm').prop('disabled', true)
    // var imgBlob = dataURLtoBlob(imageUrl);
    // 此处加上上传代码
    closeModal()
    // $("#pinConfirm").prop("disabled", false);
  })

  $('#btnCannel').click(function() {
    closeModal()
  })
})

//更换图像
function change(img) {
  $('#target').attr('src', img)
  $('#target').cropper('destroy')
  cutImage()
}

//剪切图片
function cutImage() {
  $('#target').cropper({
    viewMode: 1,
    dragMode: 'move',
    preview: '.preview-container',
    cropBox: [160, 160],
    aspectRatio: 160 / 160,
    restore: false,
    guides: false,
    highlight: false,
    cropBoxMovable: false,
    cropBoxResizable: false,
    limitCanvasMinSize: true,
    minCanvasWidth: 160,
    minCanvasHeight: 160,
    minCropBoxWidth: 160,
    minCropBoxHeight: 160,
    minContainerHeight: 160,

    limitImageMinSize: true,
    minImageWidth: 160,
    minImageHeight: 160,
    center: true
  })
}

/**
 * 从 file 域获取 本地图片 url
 */
function getFileUrl(sourceId) {
  var url = null
  if (navigator.userAgent.indexOf('MSIE') >= 1) {
    // IE
    url = document.getElementById(sourceId).value
  } else if (navigator.userAgent.indexOf('Firefox') > 0) {
    // Firefox
    url = window.URL.createObjectURL(
      document.getElementById(sourceId).files.item(0)
    )
  } else if (navigator.userAgent.indexOf('Chrome') > 0) {
    // Chrome
    url = window.URL.createObjectURL(
      document.getElementById(sourceId).files.item(0)
    )
  }
  return url
}

function closeModal() {
  $('#myModal-upload-img').modal('hide')
}
//DEMO_JS_SHOW_END
</script>
```

:::
