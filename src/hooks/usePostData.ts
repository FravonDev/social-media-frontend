import { useQuery } from '@tanstack/react-query'
import React from 'react'
import api from '../services/httpClient/axios'

const fetchPosts = async () => {
  const response = await api.get('https://jsonplaceholder.typicode.com/posts')
  return response
}

export const usePostData = (id: string) => {
  const query = useQuery(
    {
      queryFn: fetchPosts,
      queryKey: ['posts-data'],
      enabled: !!id, // only fetch when id is defined, leave blank to fetch on component mount
      retry: 3, // retry 3 times before failing
      refetchOnWindowFocus: false, // don't refetch on window focus


    }
  )

  return {
    ...query,
    data: query?.data
  }
}

