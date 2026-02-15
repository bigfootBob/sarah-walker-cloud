const Footer = () => {
    return (
        <footer style={{ padding: '2rem', textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
            &copy; {new Date().getFullYear()} Sarah Walker. All rights reserved.
        </footer>
    );
};

export default Footer;