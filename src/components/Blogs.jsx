import React from "react";

function Blogs() {
  const articles = [
    {
      title: "Speaking SQL: Turning Natural Language into Database Dialogues",
      description:
        "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.",
      link: "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html",
    },
    {
      title:
        "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
      description:
        "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones.",
      link: "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learningfrom-human-feedback.html",
    },
    {
      title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
      description:
        "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense.",
      link: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html",
    },
    {
      title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
      description:
        "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media. And, no surprises here, the technological world has openly embraced it in myriad innovative ways.",
      link: "https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html",
    },
  ];

  return (
    <section className="container mx-auto my-16 pl-10">
      <div className="flex items-center mx-16">
        <h2 className="text-4xl font-bold text-black mr-4">
          Explore and enjoy the blogs written by our passionate techies.
        </h2>
      </div>
      <div className="grid  sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 mx-16 my-10">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg  w-4/5 flex flex-col items-start "
          >
            <h3 className="text-xl font-bold mb-4 text-black">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm">{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-4 cursor-pointer transition-transform transform hover:scale-110"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
