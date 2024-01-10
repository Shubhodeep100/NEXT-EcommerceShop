"use client"
import { ReactNode } from "react"
import { CartProvider as USCProvider } from "use-shopping-cart"

export default function CartProvider({ children }: { children: ReactNode }) {



    return (
        <div>
            <USCProvider
                mode="payment"
                cartMode="client-only"
                stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
                successUrl="https://next-ecommerce-shop-rho.vercel.app/stripe/success"
                cancelUrl="https://next-ecommerce-shop-rho.vercel.app/stripe/error"
                currency="INR"
                billingAddressCollection={false}
                shouldPersist={true}
                language="en-US"
            >

                {children}

            </USCProvider>
        </div>
    )
}