/**
 * @amlplugins/atlassian-bitbucket
 *
 * Thin namespaced re-export of the native bitbucket SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Bitbucket Cloud REST API 2.0 — repositories, pull requests, pipelines, issues, deployments.
 */

import * as _sdk from "bitbucket";
export * from "bitbucket";
export { _sdk as sdk };
export default _sdk;
