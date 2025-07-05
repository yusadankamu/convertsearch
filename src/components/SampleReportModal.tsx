import React from "react";
import {
  X,
  Download,
  FileText,
  BookOpen,
  Award,
  CheckCircle,
} from "lucide-react";

interface SampleReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SampleReportModal: React.FC<SampleReportModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const sampleReport = `SCIENTIFIC RESEARCH REPORT

Title: Statistical Analysis of Student Performance Data: A Comprehensive Investigation of Academic Achievement Patterns in Higher Education

Author: Dr. Sarah M. Johnson¹, Prof. Michael R. Chen², Dr. Emily K. Williams¹
Institution: ¹Department of Educational Psychology, Harvard University
           ²Department of Statistics, Oxford University
Date: December 15, 2024
Word Count: 2,847 words

═══════════════════════════════════════════════════════════════════════════════

ABSTRACT

Background: Understanding factors that influence student academic performance is crucial for educational institutions seeking to optimize learning outcomes. This study examines the relationship between various demographic, socioeconomic, and behavioral variables and student academic achievement in higher education settings.

Objective: To identify significant predictors of academic performance and quantify their relative contributions to student success, providing evidence-based insights for educational policy and intervention strategies.

Methods: A comprehensive dataset containing 1,247 student records was analyzed using multiple regression analysis, correlation studies, and descriptive statistics. Variables included GPA, study hours, socioeconomic status, attendance rates, and demographic factors. Statistical analysis was conducted using SPSS 29.0 with significance set at p < 0.05.

Results: Strong positive correlations were identified between study hours and GPA (r = 0.742, p < 0.001), attendance rates and academic performance (r = 0.689, p < 0.001), and socioeconomic status and achievement (r = 0.456, p < 0.001). Multiple regression analysis revealed that study hours, attendance, and prior academic preparation collectively explained 67.3% of the variance in student GPA (R² = 0.673, F(3,1243) = 847.2, p < 0.001).

Conclusions: The findings demonstrate that behavioral factors (study habits and attendance) are stronger predictors of academic success than demographic variables. These results have significant implications for educational interventions and support programs aimed at improving student outcomes.

Keywords: academic performance, higher education, statistical analysis, student success, educational psychology, predictive modeling

═══════════════════════════════════════════════════════════════════════════════

1. INTRODUCTION

1.1 Background and Rationale

Academic performance in higher education represents a complex phenomenon influenced by multiple interconnected factors. Understanding these relationships is essential for educational institutions, policymakers, and students themselves as they work to optimize learning outcomes and educational success (Anderson et al., 2023). The increasing emphasis on evidence-based educational practices has highlighted the need for rigorous statistical analysis of factors contributing to student achievement.

Previous research has identified numerous variables potentially associated with academic performance, including socioeconomic background (Thompson & Davis, 2024), study behaviors (Wilson et al., 2023), attendance patterns (Brown & Miller, 2023), and demographic characteristics (Garcia & Lee, 2024). However, the relative importance of these factors and their interactions remain subjects of ongoing investigation.

1.2 Research Questions

This study addresses the following primary research questions:

1. What are the strongest predictors of academic performance among university students?
2. How much variance in student GPA can be explained by measurable behavioral and demographic factors?
3. What are the practical implications of these findings for educational policy and student support services?

1.3 Objectives

The primary objectives of this research are:
• To quantify relationships between student characteristics and academic performance
• To develop a predictive model for academic success
• To provide evidence-based recommendations for educational interventions
• To contribute to the theoretical understanding of factors influencing higher education outcomes

═══════════════════════════════════════════════════════════════════════════════

2. LITERATURE REVIEW

2.1 Theoretical Framework

The theoretical foundation for this research draws upon Tinto's Model of Student Departure (Tinto, 2017) and Astin's Input-Environment-Outcome Model (Astin, 2019). These frameworks provide comprehensive perspectives on how student characteristics, institutional environments, and behavioral factors interact to influence academic outcomes.

Recent developments in educational psychology have emphasized the importance of self-regulated learning behaviors and their impact on academic achievement (Zimmerman & Schunk, 2023). This body of work provides the conceptual framework for understanding how study habits and attendance patterns contribute to student success.

2.2 Previous Research

Extensive literature exists regarding factors influencing academic performance. The seminal work of Pascarella and Terenzini (2022) established foundational understanding of how college affects students, while more recent studies have focused on specific predictive factors.

Study Behaviors and Academic Performance
Research consistently demonstrates strong relationships between study habits and academic achievement. Martinez et al. (2023) found that students who engaged in regular, structured study sessions achieved significantly higher GPAs than those with irregular study patterns (M = 3.42 vs. M = 2.78, p < 0.001).

Attendance and Academic Success
The relationship between class attendance and academic performance has been extensively documented. Johnson and Williams (2024) conducted a meta-analysis of 47 studies and found a mean correlation of r = 0.64 between attendance rates and final grades across diverse academic disciplines.

Socioeconomic Factors
Socioeconomic status continues to be a significant predictor of academic achievement in higher education. The comprehensive study by Chen et al. (2023) demonstrated that students from higher socioeconomic backgrounds had access to more educational resources and achieved higher academic outcomes on average.

2.3 Research Gap

Despite extensive previous research, significant gaps remain in our understanding of the relative importance of different predictive factors and their interactions. This study addresses these gaps by providing a comprehensive analysis of multiple variables simultaneously and quantifying their relative contributions to academic performance.

═══════════════════════════════════════════════════════════════════════════════

3. METHODOLOGY

3.1 Research Design

This study employed a quantitative, correlational research design to examine relationships between student characteristics and academic performance. The approach follows established methodological standards for educational research as outlined by the American Educational Research Association (AERA, 2024).

3.2 Participants

The study sample consisted of 1,247 undergraduate students from a large public university in the northeastern United States. Participants were selected using stratified random sampling to ensure representation across academic disciplines, year levels, and demographic characteristics.

Sample Characteristics:
• Age range: 18-24 years (M = 20.3, SD = 1.7)
• Gender distribution: 52% female, 48% male
• Academic year: 23% first-year, 27% second-year, 26% third-year, 24% fourth-year
• Academic disciplines: 31% STEM, 28% Liberal Arts, 22% Business, 19% Other

3.3 Data Collection

3.3.1 Variables
Dependent Variable:
• Cumulative GPA (scale: 0.0-4.0)

Independent Variables:
• Weekly study hours (self-reported)
• Class attendance rate (percentage)
• Socioeconomic status (composite index)
• Prior academic preparation (standardized test scores)
• Demographic variables (age, gender, ethnicity)

3.3.2 Instruments
Data were collected using validated instruments including:
• Academic Performance Questionnaire (APQ-R; Thompson, 2023)
• Study Habits Inventory (SHI; Davis & Wilson, 2024)
• Socioeconomic Status Index (SESI; Brown et al., 2023)

3.3.3 Data Collection Procedures
Data collection occurred over one academic semester using secure online surveys. Institutional Review Board approval was obtained prior to data collection, and all participants provided informed consent.

3.4 Statistical Analysis

Statistical analyses were conducted using SPSS 29.0. The analytical approach included:

3.4.1 Descriptive Statistics
• Measures of central tendency and variability
• Frequency distributions
• Normality testing using Shapiro-Wilk tests

3.4.2 Correlation Analysis
• Pearson product-moment correlations
• Spearman rank-order correlations for non-parametric data
• Correlation matrix construction

3.4.3 Multiple Regression Analysis
• Hierarchical multiple regression
• Assumption testing (linearity, independence, homoscedasticity, normality)
• Multicollinearity assessment using VIF values

3.4.4 Additional Analyses
• ANOVA for group comparisons
• Effect size calculations (Cohen's d, eta-squared)
• Post-hoc analyses using Tukey's HSD

═══════════════════════════════════════════════════════════════════════════════

4. RESULTS

4.1 Descriptive Statistics

4.1.1 Sample Characteristics
The final sample of 1,247 students demonstrated appropriate variability across all measured variables. Cumulative GPA ranged from 1.67 to 4.00 (M = 3.12, SD = 0.58), indicating sufficient variance for statistical analysis.

Study hours per week ranged from 5 to 45 hours (M = 18.7, SD = 8.3), while attendance rates varied from 42% to 100% (M = 84.2%, SD = 12.7%). These distributions approximated normality based on Shapiro-Wilk tests (all p > 0.05).

4.1.2 Variable Distributions
All continuous variables met assumptions for parametric statistical testing:
• GPA: M = 3.12, SD = 0.58, Skewness = -0.23, Kurtosis = -0.41
• Study Hours: M = 18.7, SD = 8.3, Skewness = 0.15, Kurtosis = -0.28
• Attendance Rate: M = 84.2%, SD = 12.7%, Skewness = -0.67, Kurtosis = 0.33

4.2 Correlation Analysis

4.2.1 Primary Correlations
Pearson correlation analysis revealed significant relationships between all predictor variables and GPA:

• Study Hours ↔ GPA: r = 0.742, p < 0.001, 95% CI [0.718, 0.764]
• Attendance Rate ↔ GPA: r = 0.689, p < 0.001, 95% CI [0.662, 0.714]
• Socioeconomic Status ↔ GPA: r = 0.456, p < 0.001, 95% CI [0.418, 0.492]
• Prior Preparation ↔ GPA: r = 0.523, p < 0.001, 95% CI [0.487, 0.557]

4.2.2 Intercorrelations
Moderate correlations were observed between predictor variables:
• Study Hours ↔ Attendance: r = 0.567, p < 0.001
• Socioeconomic Status ↔ Prior Preparation: r = 0.423, p < 0.001
• Study Hours ↔ Socioeconomic Status: r = 0.298, p < 0.001

4.3 Multiple Regression Analysis

4.3.1 Model Development
Hierarchical multiple regression was conducted with GPA as the dependent variable. Variables were entered in three blocks based on theoretical considerations:

Block 1: Demographic variables (age, gender)
Block 2: Background factors (socioeconomic status, prior preparation)
Block 3: Behavioral variables (study hours, attendance rate)

4.3.2 Regression Results
The final model was statistically significant: F(6,1240) = 847.2, p < 0.001, R² = 0.673

Individual predictor contributions:
• Study Hours: β = 0.421, t = 18.7, p < 0.001
• Attendance Rate: β = 0.298, t = 13.4, p < 0.001
• Prior Preparation: β = 0.187, t = 8.9, p < 0.001
• Socioeconomic Status: β = 0.134, t = 6.2, p < 0.001
• Gender: β = 0.067, t = 3.1, p = 0.002
• Age: β = 0.023, t = 1.1, p = 0.271 (not significant)

4.3.3 Model Assumptions
All regression assumptions were satisfied:
• Linearity: Confirmed through scatterplot examination
• Independence: Durbin-Watson = 1.97 (acceptable range)
• Homoscedasticity: Levene's test p = 0.342 (not significant)
• Normality: Kolmogorov-Smirnov test p = 0.089 (not significant)
• Multicollinearity: All VIF values < 2.5

4.4 Additional Analyses

4.4.1 Group Comparisons
ANOVA revealed significant differences in GPA across academic disciplines:
F(3,1243) = 12.7, p < 0.001, η² = 0.030

Post-hoc analyses (Tukey's HSD) indicated:
• STEM students: M = 3.18, SD = 0.61
• Liberal Arts students: M = 3.15, SD = 0.55
• Business students: M = 3.02, SD = 0.58
• Other disciplines: M = 3.08, SD = 0.59

4.4.2 Effect Sizes
Cohen's conventions were used to interpret effect sizes:
• Study Hours → GPA: Large effect (r² = 0.551)
• Attendance → GPA: Large effect (r² = 0.475)
• Socioeconomic Status → GPA: Medium effect (r² = 0.208)
• Prior Preparation → GPA: Large effect (r² = 0.274)

═══════════════════════════════════════════════════════════════════════════════

5. DISCUSSION

5.1 Interpretation of Findings

The results of this comprehensive analysis provide substantial evidence for the importance of behavioral factors in predicting academic performance. The finding that study hours and attendance rates are the strongest predictors of GPA has significant implications for educational practice and student support services.

5.1.1 Primary Findings
The most significant finding is the strong relationship between study behaviors and academic achievement. Students who reported higher weekly study hours consistently achieved higher GPAs, with this relationship explaining 55.1% of the variance in academic performance. This finding aligns with self-regulated learning theory and emphasizes the importance of deliberate practice in academic success.

The strong correlation between attendance and GPA (r = 0.689) supports the fundamental importance of class participation in the learning process. This relationship remained significant even after controlling for other variables, suggesting that attendance provides unique benefits beyond what can be captured through study hours alone.

5.1.2 Socioeconomic Factors
While socioeconomic status showed a significant relationship with GPA, its effect was smaller than behavioral variables. This finding suggests that while background factors matter, they can be partially overcome through effective study behaviors and consistent attendance. This has important implications for educational equity and intervention design.

5.2 Theoretical Implications

5.2.1 Support for Existing Theory
The findings provide strong support for Astin's Input-Environment-Outcome model, demonstrating that student behaviors (environment factors) significantly influence academic outcomes beyond input characteristics. The results also support self-regulated learning theory by showing the importance of deliberate study practices.

5.2.2 Novel Contributions
This research contributes to the literature by quantifying the relative importance of different predictive factors. The finding that behavioral variables explain more variance than demographic factors challenges deficit-based models of student achievement and supports asset-based approaches to educational intervention.

5.3 Practical Implications

5.3.1 Educational Policy
The results suggest that institutional policies should focus on supporting student study behaviors and attendance rather than solely addressing demographic disparities. Specific recommendations include:

• Development of study skills workshops and time management training
• Implementation of attendance monitoring and early intervention systems
• Creation of structured study environments and peer support programs
• Integration of study skills instruction into first-year curricula

5.3.2 Student Support Services
Academic support services should prioritize interventions that directly address study behaviors:
• Individual academic coaching focused on study strategies
• Group study sessions and peer tutoring programs
• Time management and organizational skills training
• Technology tools to support study planning and progress monitoring

5.4 Limitations

5.4.1 Methodological Limitations
Several limitations should be considered when interpreting these results:
• Cross-sectional design limits causal inference
• Self-reported data may be subject to social desirability bias
• Sample limited to one institution may affect generalizability
• Unmeasured variables may contribute to unexplained variance

5.4.2 Measurement Limitations
• Study hours based on self-report rather than objective measurement
• Attendance data aggregated across different course types
• Socioeconomic status measured indirectly through proxy variables
• GPA represents cumulative rather than course-specific performance

5.5 Future Research Directions

This research opens several avenues for future investigation:
• Longitudinal studies to establish causal relationships
• Multi-institutional studies to enhance generalizability
• Qualitative research to understand mechanisms underlying statistical relationships
• Intervention studies testing the effectiveness of study skills programs
• Investigation of technology-mediated study behaviors and their impact

═══════════════════════════════════════════════════════════════════════════════

6. CONCLUSIONS

6.1 Summary of Key Findings

This comprehensive analysis of 1,247 university students provides compelling evidence for the central role of behavioral factors in academic achievement. The research successfully addressed all primary research questions and achieved the stated objectives through rigorous methodological approaches.

Key findings include:
• Study hours and attendance rates are the strongest predictors of academic performance
• Behavioral variables explain 67.3% of variance in student GPA
• Background factors, while significant, have smaller effects than behavioral variables
• The predictive model demonstrates both statistical and practical significance

6.2 Theoretical Contributions

This research makes several important theoretical contributions:
• Empirical validation of self-regulated learning theory in higher education contexts
• Quantification of relative importance of different predictive factors
• Support for asset-based rather than deficit-based models of student achievement
• Integration of multiple theoretical frameworks in a comprehensive predictive model

6.3 Practical Applications

The findings have immediate practical applications for higher education:
• Evidence-based foundation for academic support program design
• Guidance for institutional policy development
• Framework for early identification of at-risk students
• Justification for investment in study skills and attendance interventions

6.4 Research Quality and Validity

This research demonstrates high methodological rigor through:
• Large, representative sample size
• Validated measurement instruments
• Comprehensive statistical analysis
• Appropriate attention to assumptions and limitations
• Transparent reporting of all procedures and findings

6.5 Final Recommendations

Based on the comprehensive analysis, the following evidence-based recommendations are proposed:

For Institutions:
1. Implement comprehensive study skills programs for all students
2. Develop early warning systems based on attendance patterns
3. Create supportive environments that encourage regular study habits
4. Invest in academic coaching and peer support programs

For Students:
1. Prioritize consistent study schedules and time management
2. Maintain regular class attendance as a foundation for success
3. Seek support services when struggling with study strategies
4. Recognize that effective behaviors can overcome background disadvantages

For Researchers:
1. Conduct longitudinal studies to establish causal relationships
2. Investigate mechanisms underlying the behavior-achievement relationship
3. Test intervention effectiveness using randomized controlled trials
4. Explore the role of emerging technologies in supporting study behaviors

6.6 Concluding Statement

This research demonstrates that academic success in higher education is significantly influenced by modifiable behavioral factors. The strong relationships between study habits, attendance, and academic performance provide optimistic evidence that all students can improve their outcomes through deliberate practice and institutional support. These findings offer a foundation for evidence-based educational interventions that can enhance student success across diverse populations.

The statistical significance of the results, combined with large effect sizes and comprehensive validation procedures, provides strong evidence for the reliability and importance of these findings. This work establishes a foundation for future research and practical applications in higher education.

═══════════════════════════════════════════════════════════════════════════════

REFERENCES

American Educational Research Association. (2024). Standards for educational and psychological testing (4th ed.). AERA Publications.

Anderson, J. M., Roberts, K. L., & Thompson, S. R. (2023). Predictors of academic success in higher education: A comprehensive meta-analysis. Journal of Educational Psychology, 115(4), 567-584. https://doi.org/10.1037/edu0000789

Astin, A. W. (2019). Student involvement: A developmental theory for higher education. Journal of College Student Development, 60(5), 518-534. https://doi.org/10.1353/csd.2019.0047

Brown, P. A., & Miller, D. J. (2023). The relationship between class attendance and academic performance: A systematic review. Higher Education Research & Development, 42(3), 445-462. https://doi.org/10.1080/07294360.2023.1234567

Brown, K. S., Wilson, M. P., & Davis, L. R. (2023). Socioeconomic Status Index: Development and validation of a comprehensive measure. Educational Assessment, 28(2), 123-140. https://doi.org/10.1080/10627197.2023.2187654

Chen, M. R., Liu, X. Y., & Patel, S. K. (2023). Socioeconomic factors and academic achievement: A longitudinal analysis of university students. Research in Higher Education, 64(7), 1023-1045. https://doi.org/10.1007/s11162-023-09876-5

Davis, L. M., & Wilson, R. T. (2024). Study Habits Inventory: Psychometric properties and validation. Journal of Educational Measurement, 61(1), 78-95. https://doi.org/10.1111/jedm.12345

Garcia, R. S., & Lee, H. Y. (2024). Demographic predictors of academic success: A multi-institutional study. Journal of Diversity in Higher Education, 17(2), 234-251. https://doi.org/10.1037/dhe0000456

Johnson, A. B., & Williams, C. D. (2024). Class attendance and academic performance: A meta-analytic review. Educational Psychology Review, 36(1), 123-145. https://doi.org/10.1007/s10648-024-09789-1

Martinez, E. L., Thompson, K. J., & Anderson, M. P. (2023). Study behaviors and academic achievement: An experimental investigation. Contemporary Educational Psychology, 74, 102-118. https://doi.org/10.1016/j.cedpsych.2023.102187

Pascarella, E. T., & Terenzini, P. T. (2022). How college affects students: A third decade of research (3rd ed.). Jossey-Bass.

Thompson, R. J. (2023). Academic Performance Questionnaire-Revised: A comprehensive assessment tool. Assessment in Education: Principles, Policy & Practice, 30(4), 456-473. https://doi.org/10.1080/0969594X.2023.2234567

Thompson, R. J., & Davis, L. M. (2024). Socioeconomic status and academic achievement: Mechanisms and interventions. Review of Educational Research, 94(2), 234-267. https://doi.org/10.3102/00346543231234567

Tinto, V. (2017). Through the eyes of students. Journal of College Student Retention: Research, Theory & Practice, 19(3), 254-269. https://doi.org/10.1177/1521025115621917

Wilson, D. P., Martinez, A. L., & Chen, Y. W. (2023). Study strategies and academic performance: A randomized controlled trial. Journal of Educational Psychology, 115(6), 789-805. https://doi.org/10.1037/edu0000823

Zimmerman, B. J., & Schunk, D. H. (2023). Self-regulated learning and academic achievement: Theoretical perspectives (3rd ed.). Routledge.

═══════════════════════════════════════════════════════════════════════════════

APPENDICES

Appendix A: Statistical Output Tables
[Detailed correlation matrices, regression coefficients, and ANOVA results]

Appendix B: Data Collection Instruments
[Complete questionnaires and measurement scales used in the study]

Appendix C: Ethical Approval Documentation
[IRB approval letters and informed consent forms]

Appendix D: Supplementary Analyses
[Additional statistical tests and sensitivity analyses]

═══════════════════════════════════════════════════════════════════════════════

Report Quality Metrics:
- Academic Standard Compliance: 100%
- Statistical Rigor: Advanced
- Citation Format: APA 7th Edition
- Word Count: 2,847 words
- Sections: 6 major sections + appendices
- References: 15 peer-reviewed sources
- Statistical Tests: 8 different analyses
- Effect Sizes: Reported for all major findings

This report demonstrates the comprehensive, publication-ready quality that ConvertSearch delivers for every uploaded dataset, following the highest international academic standards.`;

  const handleDownloadSample = () => {
    const blob = new Blob([sampleReport], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ConvertSearch_Sample_Scientific_Report.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-slate-100 px-8 py-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-teal-100 rounded-full p-2">
              <FileText className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Sample Scientific Report
              </h2>
              <p className="text-slate-600">
                Generated by ConvertSearch AI Platform
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row h-full">
          {/* Report Preview */}
          <div className="flex-1 p-8 overflow-y-auto max-h-[70vh]">
            <div className="prose prose-slate max-w-none">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono text-slate-800 bg-slate-50 p-6 rounded-lg">
                {sampleReport}
              </pre>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 bg-slate-50 p-6 border-l border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Report Features
            </h3>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-teal-600">2,847</div>
                <div className="text-sm text-slate-600">Words</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-emerald-600">6</div>
                <div className="text-sm text-slate-600">Sections</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-slate-600">15</div>
                <div className="text-sm text-slate-600">References</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-teal-600">12</div>
                <div className="text-sm text-slate-600">Pages</div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Academic Standards
                  </h4>
                  <p className="text-sm text-slate-600">
                    Follows Harvard, Oxford, MIT, and Stanford guidelines
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Statistical Analysis
                  </h4>
                  <p className="text-sm text-slate-600">
                    Comprehensive statistical testing with significance values
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Proper Citations
                  </h4>
                  <p className="text-sm text-slate-600">
                    APA 7th edition format with peer-reviewed references
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Publication Ready
                  </h4>
                  <p className="text-sm text-slate-600">
                    Suitable for journal submission and thesis defense
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleDownloadSample}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download Sample</span>
              </button>

              <button
                onClick={onClose}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>Try ConvertSearch</span>
              </button>
            </div>

            {/* Quality Badge */}
            <div className="mt-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-5 w-5 text-teal-600" />
                <span className="font-semibold text-slate-900">
                  Quality Guarantee
                </span>
              </div>
              <p className="text-sm text-slate-600">
                This sample demonstrates the publication-ready quality that
                ConvertSearch delivers for every uploaded dataset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleReportModal;
