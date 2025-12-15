window['speech_example4_options'] = {
    lang: 'de-DE',
    startword: 'Computer',
    sources: [{
            url: 'https://api.openai.com/v1/responses',
            auth: 'Bearer Abcdefg',
            method: 'POST',
            body: '{"input": "%words%", "model": "gpt-4.1"}',
            jpath: 'choices/0/message/content'
        }]
};