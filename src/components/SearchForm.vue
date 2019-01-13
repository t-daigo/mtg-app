<template>
  <div class="row pt-3">
    <div class="col-12">
      <button type="button" class="btn btn-block btn-outline-secondary" data-toggle="collapse" data-target="#searchForm"
              aria-expanded="false" aria-controls="searchForm">
        検索条件
      </button>
      <div class="collapse" id="searchForm">
        <div class="card card-body">
          <form>
            <format-select/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormatSelect from '@/components/select/FormatSelect'

export default {
  name: 'SearchForm',
  components: { FormatSelect }
}
</script>

<style scoped>

</style>
