import fs from 'fs';
/**
* Load the environment configuration file 
* @param {string} environment The name of the environment (e.g., 'qa', 'staging'). 
* @returns {object} The environment configuration object. 
*/
export async function environmentSetup() {
    // // Determine which environment we are running in 
    const Environment = process.env.environment || 'qa';
    // environment file path 
    const configFilePath = `./env/envConfig.${Environment}.json`
    // read the env file
    if (!fs.existsSync(configFilePath)) {
        throw new Error(`Environment configuration file not found: ${configFilePath}`);
    }
    return await JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
}
// now export the single function 
export default environmentSetup;