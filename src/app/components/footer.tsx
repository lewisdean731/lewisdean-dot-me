const Footer = () => {
  return (
    <div className="w-full">
      <hr className="text-blue1 mt-4 mb-4"/>
      <pre className="text-blue1 text-lg p-1">&copy; Lewis Dean 2019 - {new Date().getFullYear()}</pre>
    </div>
  )
}

export default Footer;
