import Header from '@/components/Header/Header'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="">{children}</div>
        </div>
    )
}

export default MainLayout
