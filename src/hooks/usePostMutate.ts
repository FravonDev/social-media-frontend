import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../services/httpClient/axios'

const createPost = async (data: any) => {
    return await api.post('posts', {
     text: data.text,
     images: data.images,
    })
    
    
}

export const usePostMutate = () => {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries(
                {
                    queryKey: ['posts-data']
                }
            )
        }
    })

  return mutate
}
