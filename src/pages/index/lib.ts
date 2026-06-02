import { useQuery } from '@tanstack/vue-query'

import { reactive, watch } from 'wevu'

function fetcher() {
  console.log('fetching')
  return [{ name: '123' }, { name: '456' }]
}

export function useInfiniteList() {
  const state = reactive(
   [{ name: 'init' }],
  )

  const query = useQuery({
    queryKey: ['test'],
    queryFn: fetcher,
  })

  watch(
    query.data,
    (newData) => {
      state.push(...newData || [])
    }
  )

  return {
    state,
    loading: query.isLoading, // 如果注释掉本行，则界面按照预期展现新行
  }
}
