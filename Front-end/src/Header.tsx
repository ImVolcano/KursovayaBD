export function Header(){
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">База данных</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/clients">Clients</a>
                        <a className="nav-item nav-link" href="/accounts">Accounts</a>
                        <a className="nav-item nav-link" href="/cards">Cards</a>
                        <a className="nav-item nav-link" href="/deposits">Deposits</a>
                        <a className="nav-item nav-link" href="/credits">Credits</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}