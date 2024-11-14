/**
 * Fetches a JSON file from an S3 bucket URL.
 * @param {string} bucketName - The name of the S3 bucket.
 * @param {string} fileId - The ID of the file to fetch (excluding file extension).
 * @returns {Promise<Object>} - A promise that resolves to the JSON content of the file.
 */
async function fetchFileFromS3(bucketName, fileId) {
    const region = 'us-east-2'; // Adjust the region as needed
    const url = `https://${bucketName}.s3.${region}.amazonaws.com/${fileId}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(url, data)
        return data;
    } catch (error) {
        console.error(`Error fetching file from S3: ${error}`);
        throw error;
    }
}

export default fetchFileFromS3;
  