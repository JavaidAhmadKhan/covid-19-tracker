import './footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p>
                Made with love by
            </p>
            <a href="https://javaid-khan.vercel.app/" target="_blank" rel="noopener noreferrer">Javaid Khan </a>
        </footer>
    );
};

export default Footer;