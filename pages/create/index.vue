<template>
  <b-container fluid class="my-5">
    <b-row class="justify-content-center">
      <b-col md="9">
        <b-form @submit.prevent="submit">
          <b-row>
            <b-col cols="12" md="6">
              <div class="form__title">
                <h4>Create a New Article</h4>
              </div>
              <b-form-row>
                <b-form-group class="col-md-12">
                  <label for="title">Title</label>
                  <input v-model="formData.title" type="text" class="form-control" placeholder="Enter your Article Title" required>
                </b-form-group>
                <b-form-group class="col-md-12">
                  <el-tiptap
                    v-model="formData.description"
                    :extensions="extensions"
                    :char-counter-count="false"
                    height="90vh"
                    class="border-bottom"
                    placeholder="Write your Story"
                  />
                </b-form-group>
              </b-form-row>
            </b-col>
            <b-col cols="12" md="6">
              <div class="form__title">
                <h4>Publication Detail</h4>
              </div>
              <b-form-row>
                <b-form-group class="col-md-12">
                  <label for="short-description">Short Description</label>
                  <textarea id="short-description" v-model="formData.short_description" class="form-control" name="short-description" cols="30" rows="8" placeholder="Enter your Article Short Description" />
                </b-form-group>
                <b-form-group class="col-md-12">
                  <label for="thumbnail">Thumbnail</label>
                  <b-form-file v-model="formData.image" />
                </b-form-group>
                <b-form-group class="col-md-12">
                  <label for="categories">Categories</label>
                  <b-form-select v-model="formData.category_id">
                    <template #first>
                      <b-form-select-option :value="null" disabled>
                        Select Category
                      </b-form-select-option>
                    </template>
                    <b-form-select-option v-for="item in articleCategory" :key="item.id" :value="item.id">
                      {{ item.title }}
                    </b-form-select-option>
                  </b-form-select>
                </b-form-group>
                <b-form-group class="col-md-12">
                  <div class="d-flex align-items-center justify-content-between">
                    <label for="categories">Published</label>
                    <b-form-checkbox v-model="formData.is_visible" switch size="lg" />
                  </div>
                </b-form-group>
                <b-form-group class="col-md-12">
                  <b-button type="submit" variant="danger" size="md" class="w-sm-100">
                    Publish
                  </b-button>
                </b-form-group>
              </b-form-row>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  // necessary extensions
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  ListItem,
  BulletList,
  OrderedList
} from 'element-tiptap'
import ArticleService from '@/services/article/index.service'

export default {
  name: 'Create',
  middleware: 'menu',
  data () {
    return {
      extensions: [
        new Doc(),
        new Text({ menubar: true }),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }), // render command-button in bubble menu.
        new Underline({ bubble: true, menubar: true }), // render command-button in bubble menu but not in menubar.
        new Italic({ bubble: true }),
        new Strike({ menubar: false }),
        new ListItem({ menubar: false }),
        new BulletList({ menubar: false }),
        new OrderedList({ menubar: false })
      ],
      formData: {
        title: '',
        description: '',
        short_description: '',
        image: null,
        category_id: '',
        is_visible: false
      },
      articleCategory: []
    }
  },

  mounted () {
    this.getArticleCategory()
  },

  methods: {
    submit () {
      ArticleService.postArticle(this.formData)
      .then(() => {
        this.$toast.success('Successfully Saved!', {
          pauseOnFocusLoss: false,
          pauseOnHover: false
        })
      })
      .catch(() => {
        this.$toast.error('Failed to Save!', {
          pauseOnFocusLoss: false,
          pauseOnHover: false
        })
      })
    },

    getArticleCategory () {
      ArticleService.getArticleCategory()
      .then((response) => {
        this.articleCategory = response.data.content
      })
      .catch(() => {
        this.articleCategory = []
      })
    }
  }
}
</script>
