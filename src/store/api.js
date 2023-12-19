import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['cart'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: build => ({
        getCart: build.query({
            query: () => 'cart',
            providesTags: result =>
                result ? [
                        ...result.map(({ id }) => ({ type: 'cart', id })),
                        { type: 'cart', id: 'LIST' }
                    ]
                    : [{ type: 'cart', id: 'LIST' }]
        }),
        addToCart: build.mutation({
            query: body => ({
                url: 'cart',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'cart', id: 'LIST' }]
        }),
        removeFromCart: build.mutation({
            query: id => ({
                url: `cart/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{ type: 'cart', id: 'LIST' }]
        }),
        changeCartItem: build.mutation({
            query: body => ({
                url: `cart/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: [{ type: 'cart', id: 'LIST' }]
        })
    })
})

export const {
    useGetCartQuery,
    useAddToCartMutation,
    useRemoveFromCartMutation,
    useChangeCartItemMutation
} = api