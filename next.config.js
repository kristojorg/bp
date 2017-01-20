// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to config

    // maybe add ssr for styled-components
    // config.externals= {
    //   'styled-components/lib/models/StyleSheet' : 'commonjs styled-components/lib/models/StyleSheet'
    // };
    
    // Important: return the modified config
    return config
  }
}
