import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('introduction')

  const sections = {
    introduction: {
      title: "Introduction",
      content: (
        <div>
          <h2>Fermeture de l'Espace Aérien: Venezuela, Cuba et Iran</h2>
          <p className="lead">
            La fermeture de l'espace aérien aux aéronefs américains par le Venezuela, Cuba et l'Iran représente un phénomène géopolitique complexe qui s'inscrit dans un contexte plus large de tensions historiques et contemporaines entre ces nations et les États-Unis.
          </p>
          <div className="key-points">
            <h3>Points Clés</h3>
            <ul>
              <li>Trois nations avec des histoires distinctes d'antagonisme avec les États-Unis</li>
              <li>Mesures de souveraineté et de sécurité nationale</li>
              <li>Réponses aux sanctions et pressions américaines</li>
              <li>Manifestation de l'indépendance politique et diplomatique</li>
            </ul>
          </div>
        </div>
      )
    },
    venezuela: {
      title: "Venezuela",
      content: (
        <div>
          <h2>🇻🇪 Venezuela: Tensions Post-Chavez</h2>

          <div className="analysis-section">
            <h3>Contexte Historique</h3>
            <p>
              Depuis l'arrivée d'Hugo Chávez au pouvoir en 1999, puis sous Nicolás Maduro depuis 2013, le Venezuela a adopté une position fermement anti-américaine. Les relations se sont considérablement détériorées au fil des années.
            </p>
          </div>

          <div className="analysis-section">
            <h3>Facteurs Principaux</h3>
            <div className="factor-grid">
              <div className="factor-card">
                <h4>1. Sanctions Économiques</h4>
                <p>Les États-Unis ont imposé des sanctions sévères contre le Venezuela, ciblant le secteur pétrolier (PDVSA) et des fonctionnaires gouvernementaux. Ces sanctions ont contribué à l'effondrement économique du pays.</p>
              </div>

              <div className="factor-card">
                <h4>2. Crise de Légitimité</h4>
                <p>Washington a reconnu Juan Guaidó comme président légitime en 2019, contestant la légitimité de Maduro. Cette ingérence perçue a renforcé la position hostile de Caracas.</p>
              </div>

              <div className="factor-card">
                <h4>3. Souveraineté Énergétique</h4>
                <p>Le Venezuela possède les plus grandes réserves de pétrole au monde. Le contrôle de cette ressource est au cœur du conflit avec les États-Unis.</p>
              </div>

              <div className="factor-card">
                <h4>4. Mesure de Réciprocité</h4>
                <p>La fermeture de l'espace aérien est une réponse directe aux restrictions imposées par les États-Unis aux avions et compagnies vénézuéliennes.</p>
              </div>
            </div>
          </div>

          <div className="analysis-section">
            <h3>Implications Stratégiques</h3>
            <ul>
              <li><strong>Signal politique:</strong> Démonstration d'indépendance face à la pression américaine</li>
              <li><strong>Sécurité nationale:</strong> Prévention d'une éventuelle action militaire ou de surveillance</li>
              <li><strong>Alignement géopolitique:</strong> Rapprochement avec la Russie, la Chine et l'Iran</li>
            </ul>
          </div>
        </div>
      )
    },
    cuba: {
      title: "Cuba",
      content: (
        <div>
          <h2>🇨🇺 Cuba: L'Héritage de la Guerre Froide</h2>

          <div className="analysis-section">
            <h3>Contexte Historique</h3>
            <p>
              Les restrictions aériennes entre Cuba et les États-Unis remontent à plus de 60 ans, depuis la révolution cubaine de 1959 et la rupture des relations diplomatiques en 1961.
            </p>
          </div>

          <div className="analysis-section">
            <h3>Facteurs Principaux</h3>
            <div className="factor-grid">
              <div className="factor-card">
                <h4>1. Embargo Historique</h4>
                <p>L'embargo américain depuis 1962 (el "bloqueo") reste en place. Cuba maintient des restrictions sur l'espace aérien comme mesure de réciprocité et de souveraineté.</p>
              </div>

              <div className="factor-card">
                <h4>2. Proximité Géographique</h4>
                <p>À seulement 145 km de la Floride, Cuba considère son espace aérien comme hautement stratégique pour sa sécurité nationale face à une puissance hostile.</p>
              </div>

              <div className="factor-card">
                <h4>3. Crise des Missiles (1962)</h4>
                <p>L'héritage de la crise des missiles continue d'influencer les politiques de sécurité cubaines, avec une méfiance profonde envers les intentions américaines.</p>
              </div>

              <div className="factor-card">
                <h4>4. Révolution Socialiste</h4>
                <p>Le système politique cubain est fondamentalement opposé au modèle américain. Les restrictions aériennes symbolisent cette opposition idéologique.</p>
              </div>
            </div>
          </div>

          <div className="analysis-section">
            <h3>Évolutions Récentes</h3>
            <p>
              Bien que l'administration Obama ait tenté un dégel des relations (2014-2016) avec la réouverture d'ambassades et l'assouplissement des restrictions de voyage, l'administration Trump a inversé ces mesures. L'administration Biden a maintenu une position relativement dure.
            </p>
          </div>

          <div className="analysis-section">
            <h3>Implications Stratégiques</h3>
            <ul>
              <li><strong>Défense territoriale:</strong> Protection contre d'éventuelles incursions ou opérations de renseignement</li>
              <li><strong>Symbolisme révolutionnaire:</strong> Affirmation de l'indépendance face à "l'impérialisme américain"</li>
              <li><strong>Partenariats alternatifs:</strong> Renforcement des liens avec la Russie, la Chine et le Venezuela</li>
            </ul>
          </div>
        </div>
      )
    },
    iran: {
      title: "Iran",
      content: (
        <div>
          <h2>🇮🇷 Iran: Tensions Post-Révolution Islamique</h2>

          <div className="analysis-section">
            <h3>Contexte Historique</h3>
            <p>
              Les relations entre l'Iran et les États-Unis se sont effondrées après la révolution islamique de 1979 et la crise des otages de l'ambassade américaine. Depuis lors, les deux pays sont dans un état d'hostilité permanente.
            </p>
          </div>

          <div className="analysis-section">
            <h3>Facteurs Principaux</h3>
            <div className="factor-grid">
              <div className="factor-card">
                <h4>1. Programme Nucléaire</h4>
                <p>Le conflit autour du programme nucléaire iranien a dominé les relations. Le retrait américain de l'accord JCPOA (2018) et la réimposition de sanctions ont aggravé les tensions.</p>
              </div>

              <div className="factor-card">
                <h4>2. Sanctions "Maximum Pressure"</h4>
                <p>Les sanctions américaines visent tous les secteurs de l'économie iranienne, notamment le pétrole, la finance et l'aviation. L'Iran répond par des mesures de réciprocité.</p>
              </div>

              <div className="factor-card">
                <h4>3. Rivalité Régionale</h4>
                <p>L'Iran et les États-Unis s'opposent sur de nombreux dossiers régionaux: Irak, Syrie, Yémen, Liban. L'espace aérien est un enjeu stratégique dans ce conflit.</p>
              </div>

              <div className="factor-card">
                <h4>4. Incidents Militaires</h4>
                <p>Plusieurs incidents graves ont marqué la relation: destruction d'un drone américain (2019), assassinat du général Soleimani (2020), risques d'escalation militaire.</p>
              </div>
            </div>
          </div>

          <div className="analysis-section">
            <h3>Dimension Sécuritaire</h3>
            <p>
              Pour l'Iran, le contrôle strict de son espace aérien est crucial face à une menace militaire perçue des États-Unis et de leurs alliés régionaux (Israël, Arabie Saoudite). Le pays a développé des capacités de défense anti-aérienne sophistiquées.
            </p>
          </div>

          <div className="analysis-section">
            <h3>Implications Stratégiques</h3>
            <ul>
              <li><strong>Sécurité nationale:</strong> Protection contre des frappes aériennes ou opérations clandestines</li>
              <li><strong>Dissuasion:</strong> Affirmation de la capacité à défendre son territoire</li>
              <li><strong>Axe de résistance:</strong> Solidarité avec les alliés anti-américains (Syrie, Hezbollah)</li>
              <li><strong>Levier de négociation:</strong> Utilisation de l'espace aérien dans les discussions diplomatiques</li>
            </ul>
          </div>
        </div>
      )
    },
    analysis: {
      title: "Analyse Comparative",
      content: (
        <div>
          <h2>Analyse Géopolitique Comparative</h2>

          <div className="analysis-section">
            <h3>Points Communs</h3>
            <div className="commonalities">
              <div className="common-card">
                <h4>🎯 Opposition Structurelle aux États-Unis</h4>
                <p>Les trois pays partagent une position fondamentalement hostile envers Washington, basée sur des décennies de conflits politiques, économiques et idéologiques.</p>
              </div>

              <div className="common-card">
                <h4>💰 Sanctions Économiques</h4>
                <p>Tous trois font l'objet de sanctions américaines sévères qui impactent leur économie. La fermeture de l'espace aérien est une forme de riposte et d'affirmation de souveraineté.</p>
              </div>

              <div className="common-card">
                <h4>🛡️ Sécurité Nationale</h4>
                <p>Chaque pays considère les États-Unis comme une menace existentielle potentielle, justifiant des mesures de protection strictes incluant le contrôle de l'espace aérien.</p>
              </div>

              <div className="common-card">
                <h4>🤝 Axe de Coopération</h4>
                <p>Venezuela, Cuba et Iran ont développé des liens de coopération politique, économique et militaire, formant un bloc de résistance à l'hégémonie américaine.</p>
              </div>

              <div className="common-card">
                <h4>🗳️ Légitimité Contestée</h4>
                <p>Washington remet en question la légitimité de ces gouvernements, ce qui renforce leur posture défensive et leur volonté d'affirmer leur souveraineté.</p>
              </div>
            </div>
          </div>

          <div className="analysis-section">
            <h3>Différences Contextuelles</h3>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Venezuela</th>
                  <th>Cuba</th>
                  <th>Iran</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Origine du conflit</strong></td>
                  <td>Socialisme du XXIe siècle (années 2000)</td>
                  <td>Révolution communiste (1959)</td>
                  <td>Révolution islamique (1979)</td>
                </tr>
                <tr>
                  <td><strong>Principal enjeu</strong></td>
                  <td>Pétrole et ressources</td>
                  <td>Idéologie et proximité</td>
                  <td>Nucléaire et influence régionale</td>
                </tr>
                <tr>
                  <td><strong>Distance des USA</strong></td>
                  <td>~3,500 km</td>
                  <td>~145 km</td>
                  <td>~10,000 km</td>
                </tr>
                <tr>
                  <td><strong>Menace militaire</strong></td>
                  <td>Modérée</td>
                  <td>Faible mais symbolique</td>
                  <td>Élevée</td>
                </tr>
                <tr>
                  <td><strong>Capacité militaire</strong></td>
                  <td>Affaiblie</td>
                  <td>Limitée</td>
                  <td>Significative</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="analysis-section">
            <h3>Dimension Multipolaire</h3>
            <p>
              La fermeture de l'espace aérien par ces trois nations s'inscrit dans un contexte de multipolarité croissante. Face à l'ordre unipolaire américain, ces pays cherchent à créer des espaces d'autonomie stratégique:
            </p>
            <ul>
              <li><strong>Partenariat avec la Russie:</strong> Soutien militaire et diplomatique</li>
              <li><strong>Coopération avec la Chine:</strong> Investissements économiques et commerce</li>
              <li><strong>Sud global:</strong> Recherche d'alliances avec d'autres pays non-alignés</li>
              <li><strong>Institutions alternatives:</strong> Participation à l'ALBA, BRICS, OCS</li>
            </ul>
          </div>

          <div className="analysis-section">
            <h3>Aspect Juridique International</h3>
            <p>
              Selon la Convention de Chicago (1944), chaque État possède la souveraineté complète et exclusive sur l'espace aérien au-dessus de son territoire. Les restrictions imposées par ces trois pays sont donc légales du point de vue du droit international, même si elles reflètent des tensions politiques.
            </p>
          </div>
        </div>
      )
    },
    implications: {
      title: "Implications",
      content: (
        <div>
          <h2>Implications et Conséquences</h2>

          <div className="analysis-section">
            <h3>Conséquences Immédiates</h3>

            <div className="impact-card">
              <h4>🛫 Impact sur l'Aviation Civile</h4>
              <ul>
                <li>Allongement des routes pour les compagnies américaines</li>
                <li>Coûts supplémentaires en carburant et temps de vol</li>
                <li>Limitation des options d'urgence et de déroutement</li>
                <li>Complexification de la planification des vols vers l'Amérique latine et le Moyen-Orient</li>
              </ul>
            </div>

            <div className="impact-card">
              <h4>💼 Impact Économique</h4>
              <ul>
                <li>Réduction des échanges commerciaux directs</li>
                <li>Coûts logistiques accrus pour le fret aérien</li>
                <li>Renforcement de l'isolement économique</li>
                <li>Développement de routes alternatives via des pays tiers</li>
              </ul>
            </div>

            <div className="impact-card">
              <h4>🎖️ Impact Militaire et Sécuritaire</h4>
              <ul>
                <li>Limitation des capacités de surveillance américaines</li>
                <li>Complication des opérations militaires potentielles</li>
                <li>Renforcement des systèmes de défense anti-aérienne</li>
                <li>Augmentation de la méfiance et des risques d'incidents</li>
              </ul>
            </div>
          </div>

          <div className="analysis-section">
            <h3>Conséquences Géopolitiques à Long Terme</h3>

            <div className="long-term-grid">
              <div className="long-term-card">
                <h4>1. Fragmentation de l'Ordre International</h4>
                <p>Ces restrictions symbolisent la fragmentation croissante de l'ordre international libéral dominé par les États-Unis. Elles illustrent l'émergence de blocs géopolitiques distincts avec leurs propres règles.</p>
              </div>

              <div className="long-term-card">
                <h4>2. Renforcement des Alliances Anti-Hégémoniques</h4>
                <p>Venezuela, Cuba et Iran renforcent leurs liens mutuels et avec d'autres puissances comme la Russie et la Chine, créant un réseau de résistance à l'influence américaine.</p>
              </div>

              <div className="long-term-card">
                <h4>3. Escalade des Tensions</h4>
                <p>Ces mesures contribuent à une spirale de réciprocité négative: sanctions américaines → restrictions d'accès → nouvelles sanctions → isolement accru.</p>
              </div>

              <div className="long-term-card">
                <h4>4. Impact sur la Diplomatie</h4>
                <p>La fermeture de l'espace aérien complique les efforts diplomatiques et les contacts de personne à personne, réduisant les opportunités de désescalade.</p>
              </div>
            </div>
          </div>

          <div className="analysis-section">
            <h3>Scénarios Futurs</h3>

            <div className="scenario">
              <h4>Scénario 1: Maintien du Statu Quo</h4>
              <p>Les restrictions restent en place indéfiniment, avec une normalisation de cette situation dans les relations internationales. C'est le scénario le plus probable à court terme.</p>
            </div>

            <div className="scenario">
              <h4>Scénario 2: Escalade</h4>
              <p>Les tensions s'intensifient avec de nouvelles mesures restrictives de part et d'autre, possiblement accompagnées d'incidents aériens. Risque particulièrement élevé avec l'Iran.</p>
            </div>

            <div className="scenario">
              <h4>Scénario 3: Désescalade Partielle</h4>
              <p>Des accords diplomatiques permettent une ouverture limitée, notamment pour l'aviation civile et les urgences humanitaires. Nécessite un changement de politique américaine.</p>
            </div>

            <div className="scenario">
              <h4>Scénario 4: Normalisation Complète</h4>
              <p>Un changement de régime ou une transformation politique majeure conduit à une normalisation des relations. Scénario peu probable à court terme pour les trois pays.</p>
            </div>
          </div>

          <div className="analysis-section">
            <h3>Recommandations Analytiques</h3>
            <ul>
              <li><strong>Pour les décideurs:</strong> Évaluer les coûts-bénéfices des politiques de sanctions et de confrontation</li>
              <li><strong>Pour les compagnies aériennes:</strong> Développer des plans de contingence et des routes alternatives</li>
              <li><strong>Pour les analystes:</strong> Surveiller les évolutions dans ces trois pays et leurs implications régionales</li>
              <li><strong>Pour la diplomatie:</strong> Identifier des canaux de communication pour éviter les incidents et maintenir un dialogue minimal</li>
            </ul>
          </div>
        </div>
      )
    },
    conclusion: {
      title: "Conclusion",
      content: (
        <div>
          <h2>Conclusion: Une Manifestation de la Multipolarité</h2>

          <div className="analysis-section">
            <h3>Synthèse</h3>
            <p className="lead">
              La fermeture de l'espace aérien aux aéronefs américains par le Venezuela, Cuba et l'Iran n'est pas un phénomène isolé, mais plutôt une manifestation concrète de tensions géopolitiques profondes et durables. Ces mesures reflètent plusieurs dynamiques convergentes:
            </p>
          </div>

          <div className="synthesis-grid">
            <div className="synthesis-card">
              <h4>🌍 Souveraineté et Autodétermination</h4>
              <p>Chaque pays affirme son droit souverain à contrôler son territoire face à ce qu'il perçoit comme une ingérence américaine. Ces restrictions sont des actes de souveraineté dans un contexte de pression externe intense.</p>
            </div>

            <div className="synthesis-card">
              <h4>⚖️ Réciprocité et Proportionnalité</h4>
              <p>Ces mesures sont en grande partie des réponses aux sanctions, embargos et restrictions imposés par Washington. Elles s'inscrivent dans une logique de réciprocité, même si asymétrique.</p>
            </div>

            <div className="synthesis-card">
              <h4>🛡️ Sécurité et Défense</h4>
              <p>Face à une menace militaire perçue ou réelle, le contrôle de l'espace aérien est un élément fondamental de la défense nationale. Cette dimension sécuritaire est particulièrement prégnante pour l'Iran.</p>
            </div>

            <div className="synthesis-card">
              <h4>🌐 Ordre Multipolaire</h4>
              <p>Ces restrictions illustrent la transition d'un ordre unipolaire américain vers un système international plus multipolaire, où des puissances moyennes contestent l'hégémonie américaine.</p>
            </div>
          </div>

          <div className="analysis-section">
            <h3>Perspectives Historiques</h3>
            <p>
              Ces tensions ne sont pas nouvelles mais s'inscrivent dans des cycles historiques longs:
            </p>
            <ul>
              <li><strong>Cuba:</strong> Plus de 60 ans de confrontation depuis la révolution</li>
              <li><strong>Iran:</strong> Plus de 40 ans depuis la révolution islamique</li>
              <li><strong>Venezuela:</strong> Plus de 20 ans depuis l'arrivée de Chávez</li>
            </ul>
            <p>
              La durabilité de ces conflits suggère qu'il ne s'agit pas de problèmes conjoncturels mais de divergences structurelles profondes concernant la gouvernance, l'économie politique et l'ordre international.
            </p>
          </div>

          <div className="analysis-section">
            <h3>Leçons Géopolitiques</h3>

            <div className="lesson-card">
              <h4>1. Les Limites de la Puissance Unilatérale</h4>
              <p>Malgré sa supériorité militaire et économique, les États-Unis n'ont pas pu imposer leur volonté à ces trois pays. Les sanctions et la pression n'ont pas conduit aux changements de régime escomptés.</p>
            </div>

            <div className="lesson-card">
              <h4>2. La Résilience des États Contestataires</h4>
              <p>Venezuela, Cuba et Iran ont démontré une capacité remarquable à résister à la pression américaine, notamment grâce au soutien de puissances alternatives (Russie, Chine) et à la mobilisation nationaliste.</p>
            </div>

            <div className="lesson-card">
              <h4>3. Le Rôle de l'Idéologie</h4>
              <p>Les dimensions idéologiques (socialisme, anti-impérialisme, islamisme révolutionnaire) jouent un rôle crucial dans la pérennisation de ces conflits, au-delà des simples intérêts matériels.</p>
            </div>

            <div className="lesson-card">
              <h4>4. L'Importance de la Souveraineté Symbolique</h4>
              <p>Le contrôle de l'espace aérien, même s'il a des coûts économiques, possède une valeur symbolique et politique importante pour des États qui affirment leur indépendance.</p>
            </div>
          </div>

          <div className="analysis-section">
            <h3>Réflexion Finale</h3>
            <p>
              La fermeture de l'espace aérien par ces trois nations aux aéronefs américains est à la fois une cause et une conséquence des tensions géopolitiques contemporaines. Elle illustre comment des mesures techniques et juridiques (le contrôle de l'espace aérien) deviennent des instruments de politique étrangère et de confrontation internationale.
            </p>
            <p>
              Dans un monde de plus en plus fragmenté, où la compétition entre grandes puissances s'intensifie et où de nouveaux blocs géopolitiques émergent, ces restrictions pourraient devenir la norme plutôt que l'exception. La question n'est plus seulement de savoir si ces trois pays maintiendront leurs restrictions, mais combien d'autres États pourraient suivre cet exemple dans un contexte de multipolarité croissante.
            </p>
            <p>
              Pour les analystes géopolitiques, ces fermetures d'espace aérien sont des indicateurs précieux de l'état des relations internationales et des équilibres de pouvoir mondiaux. Elles rappellent que la souveraineté, concept fondamental du système westphalien, reste au cœur des relations internationales du XXIe siècle.
            </p>
          </div>

          <div className="citation">
            <p>
              <em>"La souveraineté sur l'espace aérien n'est pas qu'une question technique, c'est une affirmation politique de l'existence même de l'État dans l'ordre international."</em>
            </p>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🌐 Analyse Géopolitique</h1>
        <p className="subtitle">Fermeture de l'Espace Aérien: Venezuela, Cuba & Iran</p>
      </header>

      <nav className="navigation">
        {Object.entries(sections).map(([key, section]) => (
          <button
            key={key}
            className={`nav-button ${activeSection === key ? 'active' : ''}`}
            onClick={() => setActiveSection(key)}
          >
            {section.title}
          </button>
        ))}
      </nav>

      <main className="content">
        {sections[activeSection].content}
      </main>

      <footer className="footer">
        <p>Analyse géopolitique • {new Date().getFullYear()}</p>
        <p className="disclaimer">Cette analyse est fournie à titre informatif et éducatif uniquement.</p>
      </footer>
    </div>
  )
}
