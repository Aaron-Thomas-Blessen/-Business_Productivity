import { useState } from 'react';
import { generateText } from '../../Agents/generateText.js';

const TranscriptInput = () => {
    const [transcript, setTranscript] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const response = await generateText(transcript);
            if (response && response.results && response.results[0]) {
                setSummary(response.results[0].generated_text);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (err) {
            setError(err.message);
            console.error('Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Meeting Transcript Summarizer</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="transcript" className="block text-sm font-medium text-gray-700">
                        Meeting Transcript
                    </label>
                    <textarea
                        id="transcript"
                        value={transcript}
                        onChange={(e) => setTranscript(e.target.value)}
                        placeholder="[Name]: Message content..."
                        className="w-full h-48 p-2 border rounded focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
                >
                    {isLoading ? 'Generating Summary...' : 'Generate Summary'}
                </button>
            </form>

            {error && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    <p className="font-bold">Error:</p>
                    <p>{error}</p>
                </div>
            )}

            {summary && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Summary:</h2>
                    <div className="p-4 bg-white border rounded shadow whitespace-pre-wrap">
                        {summary}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TranscriptInput;