import React, { useEffect } from 'react';
import './CryptoModule.css';

import cipherImg from './cipher.jpg';

function CryptoModule() {
    useEffect(() => {
        // Add event listeners to all TOC links
        const tocLinks = document.querySelectorAll('.toc a');
        tocLinks.forEach(link => {
            link.addEventListener('click', scrollToSection);
        });

        // Remove event listeners when component unmounts
        return () => {
            tocLinks.forEach(link => {
                link.removeEventListener('click', scrollToSection);
            });
        };
    }, []);

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const yOffset = -80; // Adjust as needed to consider any fixed header
            const rect = targetSection.getBoundingClientRect();
            const scrollPosition = rect.top + window.scrollY + yOffset;
            window.scrollBy({ top: scrollPosition, left: 0, behavior: 'smooth' });
        }
    }
    return (
        <div class="crypto">
            { <div class="toc">
                <h2>Table of Contents</h2>
                <ul>
                    <li><a href="#STEELS Standards">STEELS Standards</a></li>
                    <li><a href="#Objectives">Objectives</a></li>
                    <li><a href="#Materials">Materials</a></li>
                    <li><a href="#Basic Vocab">Basic Vocab</a></li>
                    <li><a href="#Introduction">Introduction</a></li>
                    <li><a href="#Class Activity">Class Activity</a></li>
                    <li><a href="#Summary">Summary</a></li>
                    <li><a href="#Discussion">Discussion</a></li>
                </ul>
            </div> }
            <h1>Introduction to Cryptography:<br></br><i>Secret Codes and Ciphers</i></h1>
            <img src={cipherImg} alt="Caesar's Cipher"></img>
            <div class="body">
                <h2 id="STEELS Standards">STEELS Standards</h2>
                    <ul>
                        <li><a href="https://files5.pdesas.org/163005038051165169006245176208132131190217116096/Download.ashx?hash=2.2">3.5.6-8.H</a></li>
                        <li><a href="https://files5.pdesas.org/108112041116232255207228146204090032226252193124/Download.ashx?hash=2.2">3.5.6-8.I</a></li>
                        <li><a href="https://files5.pdesas.org/225125079146198173223229244205143071127114037068/Download.ashx?hash=2.2">3.5.6-8.U</a></li>
                        <li><a href="https://files5.pdesas.org/235036232045134075125059046142179129042095134123/Download.ashx?hash=2.2">3.5.6-8.BB</a></li>
                        <li><a href="https://files5.pdesas.org/202207034238051062213202015009077219061167227169/Download.ashx?hash=2.2">3.5.6-8.CC</a></li>
                        <li><a href="https://files5.pdesas.org/101203203242197017109096133004207133057127052228/Download.ashx?hash=2.2">3.5.6-8.EE</a></li>
                    </ul>
                <h2 id="Objectives">Obectives</h2>
                    <ul>
                        <li>Students will understand the basic principles of cryptography</li>
                        <li>Students will understand the importance of encrypting sensitive information</li>
                        <li>Students will create and decipher messages using simple substitution ciphers</li>
                    </ul>
                <h2 id="Materials">Materials</h2>
                    <ul>
                        <li>
                            <a href="https://news.library.mcgill.ca/wp-content/uploads/2023/01/Cipher-Wheel-Template.pdf">Paper Caesar Cipher Wheel</a>
                            <ul>
                                <li>Assemble as directed (recommended to use a brass fastener)</li>
                                <li>Make sure the wheels can spin around independently of each other</li>
                            </ul>
                        </li>
                        <li><nav><a href="/cryptography/cipherwheel">Interactive Caesar Cipher Wheel</a></nav></li>
                    </ul>
                <h2 id="Basic Vocab">Basic Vocab</h2>
                    <ul>
                        <li><b>Cryptography</b>
                            <ul><li>The practice and study of techniques used for secure communication in the presence of third parties.</li>
                                <li>It involves encoding and decoding messages to keep them secure.</li></ul></li>
                        <li><b>Plaintext</b>
                            <ul><li>The original message before encryption algorithms are applied.</li></ul></li>
                        <li><b>Ciphertext</b>
                            <ul><li>The encrypted text.</li></ul></li>
                        <li><b>Encryption</b>
                            <ul><li>Process of converting from plaintext to ciphertext using an encryption algorithm and a key, making it unreadable to outsiders.</li></ul></li>
                        <li><b>Decryption</b>
                            <ul><li>The process of converting ciphertext back into plaintext using a decryption algorithm and a key.</li></ul></li>
                        <li><b>Cybersecurity</b>
                            <ul><li>The practice of protecting computer systems, networks, and data from unauthorized access, cyberattacks, and security breaches.</li>
                                <li>Cryptography is one of many methods used to ensure cyber security.</li></ul></li>
                        <li><b>Key</b>
                            <ul><li>Knowledge held by either the sender, recipient, or both that allows them to decipher the cipher text.</li></ul></li>
                        <li><b>Performance Overhead</b>
                            <ul><li>The additional resources such as time and memory that are required to execute a task in a computer system or software application.</li></ul></li>
                    </ul>
                <h2 id="Introduction">Introduction</h2>
                    <p>Begin by asking students if they have heard of cryptography before. Discuss with them what they think it is, what it actually is, and why it is important.</p>
                    <p>A classroom example might be students secretly passing notes. Peers or teachers can intercept the note, it might be accidentally dropped or forgotten for anyone to pick up and read. An encrypted message will only read as gibberish if it falls into the wrong hands. Without the key possessed by the creator and recipient of the message, the cipher text holds no meaning.</p>
                <h2>Caesar Cipher</h2>
                    <p>Introduce the Caesar cipher as one of the oldest and simplest forms of encryption. Julius Caesar first used it to communicate with his generals on the battlefield so opposing generals couldn’t decipher his plans.</p>
                    <p>To demo it, write the alphabet on the board. And right under it, write the alphabet again offset by a shift of 3 (Caesar used a shift of 3) such that the letters line up.</p>
                    <p><b>Example:</b>
                        <ul>
                            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                            <p>DEFGHIJKLMNOPQRSTUVWXYZABC</p>
                        </ul>
                    </p>
                    <p>Below are some examples you can work through with the class.</p>
                    <p>If you would like to make your own: <a href="https://cryptii.com/pipes/caesar-cipher"><u>Plaintext to Ciphertext</u></a></p>
                    <table>
                        <thead>
                            <tr>
                                <th>Plaintext</th>
                                <th>Ciphertext</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hello</td>
                                <td>?????</td>
                            </tr>
                            <tr>
                                <td>Lehigh</td>
                                <td>??????</td>
                            </tr>
                            <tr>
                                <td>I love CS</td>
                                <td>? ???? ??</td>
                            </tr>
                            <tr>
                                <td>Learning is fun</td>
                                <td>???????? ?? ???</td>
                            </tr>
                            <tr>
                                <td>Caesar Cipher</td>
                                <td>?????? ??????</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Using the wheels, encourage the students to try going from plaintext to ciphertext and vice versa. Once they are familiar, you can try shifting by different amounts as well. Spin the wheel so the right letters of the inner and outer rings line up to match according to the shift and start deciphering!</p>
                    <p>But what happens if you don't know the key? Intuitively, we might begin to try all possible keys until we come upon the right one. Doing so, we employ a brute force approach. Allow students to attempt deciphering a few words without telling them the key! You may discuss the strategies stated below as well.</p>
                    <p>Below are some examples, you can create your own as well!</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Plaintext</th>
                                <th>Ciphertext</th>
                                <th>Key</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>I love eating ice cream</td>
                                <td>P svcl lhapun pjl jylht</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td>Chocolate milk tastes bad</td>
                                <td>Hmthtqfyj rnqp yfxyjx gfi</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td>Soccer is the best sport</td>
                                <td>Hdrrtg xh iwt qthi hedgi</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td>What's your favorite season</td>
                                <td>Sdwp'o ukqn bwrknepa oawokj</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td>My computer is white</td>
                                <td>Vh lxvydcna rb fqrcn</td>
                                <td>?</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><b>Hint:</b></p>
                    <p>When deciphering WITHOUT a key, a good idea is to look for common letters and match them with the most common letters in English words. Statistically this would be E, T, A. This method of analyzing the frequency of letters to aid in deciphering is called frequency analysis.</p>
                    <p>Another good idea is to look at stand alone letters or short words. A single letter is likely to be A or I, while two letter words may be is, am, etc.</p>
                <h2 id="Class Activity">Class Activity</h2>
                    <p><b>Option 1:</b></p>
                    <p>Divide the class up into small groups and have them work on solving a longer cipher. The first team to finish wins!</p>
                    <p>You can make your own! Or here are some samples below:</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Plaintext</th>
                                <th>Ciphertext</th>
                                <th>Key</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>?</td>
                                <td>Ilsplcl pu fvbyzlsm huk hss aoha fvb hyl. Ruvd aoha aolyl pz zvtlaopun puzpkl fvb aoha pz nylhaly aohu huf vizahjsl</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>?</td>
                                <td>Dgoxdi iokbc pbyw xyg iye gsvv lo wybo nsckzzysxdon li dro drsxqc drkd iye nsnx'd ny drkx li dro yxoc iye nsn ny. Cy drbyg ypp dro lygvsxoc. Cksv kgki pbyw dro ckpo rkblyb. Mkdmr dro dbkno gsxnc sx iyeb cksvc. Ohzvybo. Nbokw. Nscmyfob</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><b>Option 2:</b></p>
                    <p>Have the class write their own ciphertext, randomly distribute them across the room and let them decipher each other’s ciphers!</p>
                <h2 id="Summary">Summary</h2>
                    <p>Bring the class back together and have them share their decrypted messages (as applicable based on classroom activity). Discuss the strategies they employed and the challenges they faced during the activity.</p>
                    <p>Discuss real-world applications of cryptography and its role in cybersecurity. Encourage students to reflect on the role of cryptography in their own lives and why it is important. Where have they noticed it? Why do we need it? Do they see any problems (ethically/technologically), limitations, or alternatives? What is the impact it has had on technology and future implications?</p>
                    <p>In summary, cryptography is just one of the many tools used in cybersecurity and adds an extra layer of privacy and confidentiality that helps prevent data theft. Actual industry standards involve encryption algorithms far more complex than the Caesar cipher, notably AES and RSA. However, the underlying critical thinking and logical skills needed to use and create them are the same!</p>
                <h2 id="Discussion">Discussion</h2>
                <p><i>(Try to guide student discussion to touch on these)</i></p>
                <ul>
                    <li>Cryptography is all around us! It works behind the scenes in many applications we encounter on a daily basis. Pretty much anything that involves communications and data is encrypted.
                        <ul>
                            <li>Secure communication protocols such as HTTPS</li>
                            <li>Data storage</li>
                            <li>Emails</li>
                            <li>VPNs</li>
                            <li>Banking transactions</li>
                        </ul>
                    </li>
                    <li>Despite its widespread use, it is far from infallible
                        <ul>
                            <li>Over time, new vulnerabilities are discovered and exploited. They become increasingly susceptible to brute force attacks, cryptographic attacks, and implementation flaws.
                                <ul><li>Must be updated and maintained regularly which adds a level of complexity</li></ul>
                            </li>
                            <li>Introduces performance overhead
                                <ul><li>The extra drain on computational resources can affect system performance and user experience especially in resource constrained environments such as mobile devices</li></ul>
                            </li>
                            <li>Human factors
                                <ul>
                                    <li>Attackers may choose to exploit human flaws to bypass encryption</li>
                                    <li>Emphasize the importance of safe internet interactions
                                        <ul>
                                            <li>Don't give out your personal information to anyone</li>
                                            <li>Avoid clicking unknown links and downloads</li>
                                            <li>Secure wi-fi networks or use VPNs</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CryptoModule;