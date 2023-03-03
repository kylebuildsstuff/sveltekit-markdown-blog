---
title: 'Comparing 5 cheapest text to speech AI voice generators (2023)'
description: 'Comparing 5 cheapest text to speech AI voice generators on multiple factors, including price, features, and ease of use.'
author: 'Kyle'
publishedAtIso: '2023-01-16'
---

<script>
  import Table from '$lib/shared/components/table.svelte'

  const columns = [
    {
      name: 'Feature'
    },
    {
      name: 'beepbooply',
      link: 'https://beepbooply.com'
    },
    {
      name: 'Murf.ai',
      link: 'https://murf.ai'
    },
    {
      name: 'Listnr',
      link: 'https://www.listnr.tech/'
    },
    {
      name: 'Fliki',
      link: 'https://fliki.ai/'
    },
    {
      name: 'Play.ht',
      link: 'https://https://play.ht/'
    },
  ]

  const rows = [
    // Free tier	Yes	Yes	Yes	Yes	No
    [
      {
        value: 'Free tier'
      },
      {
        value: 'Yes'
      },
      {
        value: 'Yes'
      },
      {
        value: 'Yes'
      },
      {
        value: 'Yes'
      },
      {
        value: 'No'
      }
    ],

    // Prepaid/pay-as-you-go option	Yes	No	No	No	No
    [
      {
        value: 'Pay-as-you-go options'
      },
      {
        value: 'Yes (low as $2)'
      },
      {
        value: 'No'
      },
      {
        value: 'No'
      },
      {
        value: 'No'
      },
      {
        value: 'No'
      }
    ],

    // Cheapest paid tier	$7/month	19	4	8	19
    [
      {
        value: 'Cheapest paid tier'
      },
      {
        value: '$7'
      },
      {
        value: '$19'
      },
      {
        value: '$4'
      },
      {
        value: '$8'
      },
      {
        value: '$19'
      }
    ],

    // 2nd cheapest paid tier	$25/month	39	9	28	39
    [
      {
        value: '2nd cheapest paid tier'
      },
      {
        value: '$25'
      },
      {
        value: '$39'
      },
      {
        value: '$9'
      },
      {
        value: '$28'
      },
      {
        value: '$39'
      }
    ],

    // 3rd cheapest paid tier	$79/month	245	19	88	99
    [
      {
        value: '3rd cheapest paid tier'
      },
      {
        value: '$79'
      },
      {
        value: '$245'
      },
      {
        value: '$19'
      },
      {
        value: '$88'
      },
      {
        value: '$99'
      }
    ],

    // Characters per month	10k/100k/400k/1.6M	N/A	N/A	N/A	N/A
    [
      {
        value: 'Characters per month'
      },
      {
        value: '100,000 | 400,000 | 1,600,000'
      },
      {
        value: 'N/A'
      },
      {
        value: 'N/A'
      },
      {
        value: 'N/A'
      },
      {
        value: 'N/A'
      }
    ],

    // Words per month	N/A	N/A	1k/4k/10k/30k/100k/300k	N/A	20k/50k/unlimited
    [
      {
        value: 'Words per month'
      },
      {
        value: '~20,000 | ~80,000 | ~320,000'
      },
      {
        value: 'N/A'
      },
      {
        value: '4,000 | 10,000 | 30,000'
      },
      {
        value: 'N/A'
      },
      {
        value: '20,000 | 50,000 | Unlimited'
      }
    ],

    // Hours per month	0.2/2.3/9/36	0.2/2/4/unlimited	n/a	N/A	N/A
    [
      {
        value: 'Hours per month'
      },
      {
        value: '~138 mins | ~540 mins | ~2,160 mins'
      },
      {
        value: '120 mins | 240 mins | Unlimited'
      },
      {
        value: 'N/A'
      },
      {
        value: '120 mins | 180 mins | 600 mins'
      },
      {
        value: 'Unlimited'
      }
    ],

       // Downloads per month	Unlimited	Unlimited 	Unlimited	3/30/100	Unlimited
    [
      {
        value: 'Downloads per month'
      },
      {
        value: 'Unlimited'
      },
      {
        value: 'Unlimited'
      },
      {
        value: 'Unlimited'
      },
      {
        value: 'Unlimited'
      },
      {
        value: 'Unlimited'
      }
    ],


 

    // Commercial use	Yes	No	Yes	No	No
    [
      {
        value: 'Commercial use'
      },
      {
        value: 'Yes'
      },
      {
        value: 'Yes'
      },
      {
        value: 'Yes'
      },
      {
        value: 'Yes'
      },
      {
        value: 'Yes'
      }
    ],

    // SSML customizations (pause, pitch, rate, volume…)	Yes	Yes	Yes	Yes	Yes
    [
      {
        value: 'Customizations (pause, pitch, rate, volume…)'
      },
      {
        value: 'Yes'
      },
      {
        value: 'Yes'
      },
      {
        value: 'Yes'
      },
      {
        value: 'Yes'
      },
      {
        value: 'Yes'
      }
    ],

    // Voices	900+	120+	400+	180+	900+
    [
      {
        value: 'Voices'
      },
      {
        value: '900+'
      },
      {
        value: '120+'
      },
      {
        value: '400+'
      },
      {
        value: '900+'
      },
      {
        value: '900+'
      }
    ],

    
    // Languages 	80+	20+	60+	33+	140+
    [
      {
        value: 'Languages'
      },
      {
        value: '80+'
      },
      {
        value: '20+'
      },
      {
        value: '60+'
      },
      {
        value: '75+'
      },
      {
        value: '140+'
      }
    ],
    
    
    // AI voice providers
    [
      {
        value: 'AI voice provider'
      },
      {
        value: 'Amazon, Google, Microsoft'
      },
      {
        value: 'Custom'
      },
      {
        value: 'Google, IBM, Amazon'
      },
      {
        value: 'Amazon, Google, Microsoft'
      },
      {
        value: 'Amazon, Google, Microsoft, IBM'
      }
    ],
    
  ]
</script>

<h1>
3 Cheapest tiers comparisons (excludes free tiers)
</h1>

<Table columns={columns} rows={rows} />
